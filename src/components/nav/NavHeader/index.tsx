///this is the mobile header - it has the search input in the middle and to icons on the sides. Left one ddisplays HeaderInfo with the netpicker and descripttion (in case it's in a net the trigger is the net's logo), right nav btn diisplays the filters
import React, { Component } from 'react';
import HeaderInfo from "../HeaderInfo";
import CrossIcon from '../../../../public/assets/svg/icons/cross1.tsx'
import Filters from "../../search/Filters";
import FiltersMobile from "../../search/FiltersMobile"; //just for mobile



export default class NavHeader extends React.Component {



  constructor() {
      super();
      this.state = {
        name: "React",
        tag: '',
        search: "",
        setSearch: "",
        results: "",
        setResults: "",
        showHideFilters: true,
        showHideFiltersMobile: false,
        showHideExtraFilters: false,
        showHideInfoOverlay: false

      };

      this.hideComponent = this.hideComponent.bind(this);

    }



  hideComponent(name) {
      console.log(name);
      switch (name) {
        case "showHideFilters":
          this.setState({ showHideFilters: !this.state.showHideFilters });
          break;
        case "showHideFiltersMobile":
          this.setState({ showHideFiltersMobile: !this.state.showHideFiltersMobile });
          console.log(this.state.showHideFiltersMobile);
          break;
        case "showHideExtraFilters":
          this.setState({ showHideExtraFilters: !this.state.showHideExtraFilters });
          break;
        default:
          null;
      }
    }

  render() {

    const { showHideFilters, showHideFiltersMobile, showHideExtraFilters, showHideInfoOverlay } = this.state;


    return(

      <div className="nav-header__container">

          <form className="nav-header__content">

              <button className="btn-circle">

                <div className="btn-circle__content">

                  <div className="btn-circle__icon">
                    <CrossIcon />
                  </div>

                </div>

              </button>

              <div className="nav-header__content-message">

                <input onFocus={() => this.setState({ showHideFiltersMobile: true })} onBlur={() => this.setState({ showHideFiltersMobile: false })} className="form__input nav-header__content-input" placeholder="Search tags"></input>

              </div>

          </form>

          <Filters />

          { showHideFiltersMobile ? <FiltersMobile />  : null}

          { showHideInfoOverlay ? <HeaderInfo />  : null}


      </div>

    )

  }

}
