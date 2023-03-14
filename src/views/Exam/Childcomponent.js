import React from "react";

class Childcomponent extends React.Component {
  state = {
    isShow: true,
  };
  handleisShow = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    let { arr } = this.props;
    let { isShow } = this.state;
    return (
      <>
        {isShow === false ? (
          <div onClick={() => this.handleisShow()}>
            <button>show</button>
          </div>
        ) : (
          <>
            <div className="job-list">
              {arr.map((items, index) => {
                return (
                  <div key={items.id}>
                    {items.title} - {items.salary}$
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleisShow()}>hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Childcomponent;
