<template>
  <main class="select-data-source">
    <b-form @submit="go">
      <b-form-group
        id="select" :label="$t('index.specifyCatalog')" label-for="url"
        :invalid-feedback="error" :state="valid"
      >
        <b-form-input id="url" type="url" :value="url" @input="setUrl" placeholder="https://..." />
      </b-form-group>
      <b-button type="submit" variant="primary">{{ $t('index.load') }}</b-button>
    </b-form>
    <hr v-if="stacIndex.length > 0">
    <b-form-group v-if="stacIndex.length > 0" class="stac-index">
      <template #label>
        <i18n path="index.selectStacIndex">
          <template #stacIndex>
            <a href="https://stacindex.org" target="_blank">STAC Index</a>
          </template>
        </i18n>
      </template>
      <b-list-group>
        <template v-for="catalog in stacIndex">
          <b-list-group-item button v-if="show(catalog)" :key="catalog.id" :active="url === catalog.url" @click="open(catalog.url)">
            <div class="d-flex justify-content-between align-items-baseline mb-1">
              <strong>{{ catalog.title }}</strong>
              <b-badge v-if="catalog.isApi" variant="danger">{{ $t('index.api') }}</b-badge>
              <b-badge v-else variant="success">{{ $t('index.catalog') }}</b-badge>
            </div>
            <Description :description="catalog.summary" compact />
          </b-list-group-item>
        </template>
      </b-list-group>
    </b-form-group>
  </main>
</template>

<script>
import { BForm, BFormGroup, BFormInput, BListGroup, BListGroupItem } from 'bootstrap-vue';
import { mapGetters } from "vuex";
import Description from '../components/Description.vue';
import Utils from '../utils';
import axios from "axios";

export default {
  name: "SelectDataSource",
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BListGroup,
    BListGroupItem,
    Description
  },
  data() {
    return {
      url: '',
      stacIndex: []
    };
  },
  computed: {
    ...mapGetters(['toBrowserPath']),
    valid() {
      return !this.error;
    },
    error() {
      if (!this.url) {
        return null;
      }
      try {
        let url = new URL(this.url);
        if (!url.protocol) {
          return this.$t('index.urlMissingProtocol');
        }
        else if (!url.host) {
          return this.$t('index.urlMissingHost');
        }
        return null;
      } catch (errot) {
        return this.$t('index.urlInvalid');
      }
    }
  },
  async created() {
    // Reset loaded STAC catalog
    this.$store.commit('resetCatalog', true);
    // Load entries from STAC Index
    try {
      // let options = {
      //   method: 'GET',
      //   url: `https://1gp9st60gd.execute-api.us-west-2.amazonaws.com/dev/sbx-uds-dapa/collections/URN:NASA:UNITY:UDS_LOCAL_TEST:DEV:UDS_COLLECTION___2402011700?limit=100`,
      //   headers: {
      //     Authorization: `Bearer eyJraWQiOiJsWmw3XC9yYXFVTVRaTHBVMnJ3bm1paXZKSCtpVFlONngxSUhQNndZaU03RT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4MjJiNmQwYy05MDU0LTRjNDMtYTkwZS04YjU5YjI2MTZiMzUiLCJjb2duaXRvOmdyb3VwcyI6WyJVbml0eV9WaWV3ZXIiLCJVbml0eV9BZG1pbiJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl95YU93M3lqMHoiLCJjbGllbnRfaWQiOiI3MWcwYzczamw3N2dzcWh0bGZnMmh0Mzg4YyIsIm9yaWdpbl9qdGkiOiJmNjk5OGE1Mi04NzQ2LTRlYzQtODU4MS1hN2EzODRmMGU0NDciLCJldmVudF9pZCI6ImRjYjk3NWY2LTgxMjMtNDM2Ni04MzkxLTljZDgxZGRhMTUyNCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDk1ODA2MjUsImV4cCI6MTcwOTU4NDIyNSwiaWF0IjoxNzA5NTgwNjI1LCJqdGkiOiJiNjUxYTU3OS01NWRkLTRiZTAtYWFkMi1iYzM1NTgxZjRmN2YiLCJ1c2VybmFtZSI6IndwaHlvIn0.rn0E0QIH4Ske51OA4p-Wk4NUeqwDsMpDPtHiluNqTjzVzgefMKkH1gLX62DQqHNsZ9bcGQHT6qgPx6qIFSLwb9YHa9t_g9QkT_kHtyjzrTzIfcgUY61QOJfN2cP26cinBc2QGNTVTUMfdfzVxXDm7ltLSZe5HiaxH1qDbuM55YnAjPujTSWXb-7q_MmSS63tmijU9CEAdHrWi7wkrtRzeO_N8nmikuBeQo2gTbgxO7MUIBFLu0N89ynjoGgtFWfFoULKjVg8GERYformZA67nj1WLA3hRQoQDqm3MUMP3T3jqoHh58ZsEVy1X9er3lASlj1pQeCKG0WkEI1hVwLvkg`,
      //   },
      //   json: true,
      //   insecure: true,
      //   rejectUnauthorized: false,
      // };
      // let result1 = await axios.request(options);
      // console.log(result1.data);

      // let response = await axios.get('https://1gp9st60gd.execute-api.us-west-2.amazonaws.com/dev/sbx-uds-dapa/catalog');
      // if(Array.isArray(response.data)) {
      //   this.stacIndex = response.data;
      // }
      this.stacIndex = [
        {
          "id": 1,
          "url": "https://d3vc8w9zcq658.cloudfront.net/sbx-uds-dapa/catalog",
          "slug": "unity-ds",
          "title": "Unity DS (DEV SANDBOX)",
          "summary": "Unity DS in Sandbox Environment where things will break down most of the time",
          "access": "public",
          "created": "2023-03-16T09:15:31.242Z",
          "updated": "2023-03-16T09:15:31.242Z",
          "isPrivate": false,
          "isApi": false,
          "accessInfo": null
        },
        {
          "id": 2,
          "url": "https://d3vc8w9zcq658.cloudfront.net/am-uds-dapa/catalog",
          "slug": "unity-ds",
          "title": "Unity DS (DEV STABLE)",
          "summary": "Unity DS in Dev Environment.",
          "access": "public",
          "created": "2023-03-16T09:15:31.242Z",
          "updated": "2023-03-16T09:15:31.242Z",
          "isPrivate": false,
          "isApi": false,
          "accessInfo": null
        },
        {
          "id": 3,
          "url": "https://dxebrgu0bc9w7.cloudfront.net/am-uds-dapa/catalog",
          "slug": "unity-ds",
          "title": "Unity DS (TEST)",
          "summary": "Unity DS in Test Environment.",
          "access": "public",
          "created": "2023-03-16T09:15:31.242Z",
          "updated": "2023-03-16T09:15:31.242Z",
          "isPrivate": false,
          "isApi": false,
          "accessInfo": null
        },
        {
          "id": 4,
          "url": "https://d2zjsabg0fonik.cloudfront.net/am-uds-dapa/catalog",
          "slug": "unity-ds",
          "title": "Unity DS (Production)",
          "summary": "Unity DS in Production Environment.",
          "access": "public",
          "created": "2023-03-16T09:15:31.242Z",
          "updated": "2023-03-16T09:15:31.242Z",
          "isPrivate": false,
          "isApi": false,
          "accessInfo": null
        },
      ]
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    show(catalog) {
      if (catalog.access === 'private') {
        return false;
      }
      else if(!this.url) {
        return true;
      }

      return Utils.search(this.url, [catalog.title, catalog.url]);
    },
    setUrl(url) {
      this.url = url;
    },
    open(url) {
      this.url = url;
      this.go();
    },
    go() {
      this.$router.push(this.toBrowserPath(this.url));
    }
  }
};
</script>

<style lang="scss">
@import '../theme/variables.scss';

#stac-browser .select-data-source {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;

  hr {
    width: 100%;
  }

  .stac-index {
    margin: 0;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;

    > div {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: auto;
      border: 1px solid rgba(0,0,0,.125);
      border-radius: $border-radius;

      .list-group {
        width: 100%;

        .list-group-item {
          border: 0;
          border-bottom: 1px solid rgba(0,0,0,.125);
        }

        .active .styled-description a {
          color: white;
        }
      }
    }
  }
}
</style>
