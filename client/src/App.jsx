/** @jsx h */
import { Component, h } from 'preact';
import { Renderer } from './Renderer';
// import { ButtonCounter } from './ButtonCounter';
const query = "*%5B_type%20%3D%3D%20'menu'%20%26%26%20!(_id%20in%20path('drafts.**'))%5D%7B%0A%20%20_id%2C%0A%20%20title%2C%0A%20%20subtitle%5B%5D%2C%0A%20%20menuColumnLeft%5B%5D%20%7B%0A%20%20%20%20_key%2C%0A%20%20%20%20_type%2C%0A%20%20%20%20menuSubHeadingText%2C%0A%20%20%20%20name%2C%0A%20%20%20%20price%2C%0A%20%20%20%20description%5B%5D%0A%20%20%7D%2C%0A%20%20menuColumnRight%5B%5D%20%7B%0A%20%20%20%20_key%2C%0A%20%20%20%20_type%2C%0A%20%20%20%20menuSubHeadingText%2C%0A%20%20%20%20name%2C%0A%20%20%20%20price%2C%0A%20%20%20%20description%5B%5D%0A%20%20%7D%0A%7D";
// const query = "*%5B_type%20%3D%3D%20'menu'%20%26%26%20!(_id%20in%20path('drafts.**'))%5D%7B%0A...%20%0A%7D";
const url =
  `https://omde8c75.api.sanity.io/v2021-10-21/data/query/${isProd ? 'production' : 'dev'}?query=${query}`;
// const url = "https://omde8c75.api.sanity.io/v2021-10-21/data/query/dev?query=*%5B_type%20%3D%3D%20'menu'%20%26%26%20!(_id%20in%20path('drafts.**'))%5D%7B%0A...%20%0A%7D"

export class App extends Component {

  constructor(props) {
    super();
    this.state = {
      data: null,
    }
  }

  fetchContent = async () => {
    try {
      const result = await fetch(url);
      const data = result.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  runQuery = async () => {
    let _data;
    try {
      _data = await this.fetchContent();
      this.setState({ data: _data });
    } catch (e) {
      console.error(e);
    }
  };

  componentDidMount() {
    this.runQuery();
  }

  render() {
    return (
      <Renderer data={this.state.data} />
    )
  }
};
