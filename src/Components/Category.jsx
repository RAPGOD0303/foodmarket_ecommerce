import React from "react";
import data from "../DATA/Category.json";
class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCategory: "All",
      selectedProduct: [],
    };
  }

  componentDidMount() {
    this.getObjectsByCategory("All");
  }

//   getObjectsByCategory = (category) => {
//     if (category == "All") {
//         console.log('All JSON DATA', data);
        
//       // If no category passed, return all data
//       // this.setState({ selectedProduct: data });
//     //   this.state.selectedProduct = data;
//     this.setState({ selectedProduct: data });
//     }
//     // Otherwise, return only matching category
//     this.setState({
//       selectedProduct: data.filter((item) => item.category === category),
//     });
//   };
getObjectsByCategory = (category) => {
  if (category === "All") {
    console.log("All JSON DATA", data);
    this.setState({ selectedProduct: data });
  } else {
    this.setState({
      selectedProduct: data.filter((item) => item.category === category),
    });
  }
};
  // ✅ Method 2: Get unique categories
  getUniqueCategories = () => {
    return [...new Set(data.map((item) => item.category))];
  };

  render() {
    const uniqueCategories = this.getUniqueCategories();
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <div
            onClick={() => {
              this.getObjectsByCategory("All");
            }}
          >
            All
          </div>
          {uniqueCategories.map((cat, index) => (
            <div
              style={{
                marginLeft: "10px",
              }}
              key={index}
              onClick={() => {
                this.getObjectsByCategory(cat);
              }}
            >
              {cat}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "10px",
          }}
        >
          {this.state.selectedProduct.map((cat, index) => (
            <div key={index}>{cat.title}</div>
          ))}
        </div>
      </>
    );
  }
}

export default Category;
