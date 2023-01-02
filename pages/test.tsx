import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/category.md';

export default class Home extends Component {
  render() {
    let { categories } = attributes;
    return (
      <div>
        {
          categories.map((item: any, index: any) => {
            return (
              <p>{item.name}</p>
            )
          })
        }
      </div>
    )
  }
}
