<template>
  <div id="app">
    <main class="main">
      <nav class="navbar">
        <router-link class="navbar-brand" :to="{ name: 'dashboard' }">
          <svg width="1.25em" height="1.25em" viewBox="0 0 2134 2134" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g><g id="Final"><path d="M866.057,240.829c52.769,-80.629 123.244,-129.9 200.61,-129.9c77.366,0 147.84,49.271 200.61,129.9c26.985,18.356 53.286,44.501 76.371,81.416c20.466,32.727 34.356,102.798 14.454,192.523c3.028,28.096 4.61,57.047 4.61,86.606c0,72.137 -9.421,140.658 -26.334,202.359c23.246,24.345 36.438,52.183 36.438,81.746c0,0.877 -0.012,1.753 -0.036,2.615c2.296,-0.345 4.617,-0.702 6.977,-1.071c37.433,-5.857 78.982,-25.536 125.875,-57.25c125.815,-85.09 74.13,-353.24 93.146,-434.433c22.967,-98.061 87.671,-172.024 197.81,-226.115c11.337,-5.568 23.373,-8.128 35.192,-7.985c29.088,-0.352 57.188,15.694 70.862,43.542c18.954,38.59 3.033,85.232 -35.557,104.19c-137.702,67.623 -131.271,145.687 -105.174,301.841c12.204,73.007 15.116,219.768 8.882,236.79c-44.82,150.271 -136.768,251.332 -286.859,296.675c90.586,59.262 182.987,76.611 275.392,51.545c17.919,-4.86 97.888,-26.792 119.116,-92.071c20.941,-64.393 -10.522,-188.919 -15.231,-219.302c-13.757,-88.781 -29.521,-132.243 57.032,-218.968c28.211,-28.266 72.232,-32.544 102.079,-6.016c29.85,26.529 37.695,77.764 6.016,102.079c-95.229,73.092 62.055,309.014 -6.872,471.351c-51.648,121.648 -182.564,236.245 -367.005,234.728c-105.987,2.816 -200.315,-26.863 -268.688,-57.791c24.764,89.774 295.3,90.39 456.418,154.05c42.935,-131.464 151.624,-204.546 177.021,-212.724c28.157,-9.065 70.495,-29.872 99.727,13.607c43.04,64.017 -23.115,88.059 -33.963,94.663c-23.043,14.031 -81.026,42.001 -123.688,167.972c58.285,37.949 90.478,54.554 107.8,118.056c11.444,41.954 6.051,97.304 -0.334,123.083c-15.51,62.622 -72.896,51.864 -101.927,35.758c-10.832,-6.01 -24.478,-18.568 -28.817,-41.291c-9.016,-47.213 -8.043,-75.282 -29.775,-98.473c-43.822,88.492 -65.543,156.959 -192.891,218.07c-127.907,61.381 -251.677,54.74 -424.244,-40.785c-127.08,-70.345 -180.812,-179.828 -224.433,-296.285l-16.956,43.281c-41.245,99.935 -96.282,191.452 -207.478,253.004c-172.567,95.525 -296.336,102.166 -424.244,40.785c-127.347,-61.111 -149.068,-129.578 -192.891,-218.07c-21.732,23.191 -20.759,51.26 -29.775,98.473c-4.339,22.723 -17.984,35.281 -28.817,41.291c-29.03,16.106 -86.417,26.864 -101.927,-35.758c-6.384,-25.779 -11.778,-81.129 -0.334,-123.083c17.322,-63.502 49.516,-80.107 107.801,-118.056c-42.663,-125.971 -100.646,-153.941 -123.689,-167.972c-10.848,-6.604 -77.003,-30.646 -33.963,-94.663c29.232,-43.479 71.57,-22.672 99.727,-13.607c25.397,8.178 134.087,81.26 177.021,212.724c161.118,-63.66 431.654,-64.276 456.419,-154.05c-68.374,30.928 -162.702,60.607 -268.689,57.791c-184.441,1.517 -315.356,-113.08 -367.005,-234.728c-68.927,-162.337 88.357,-398.259 -6.872,-471.351c-31.679,-24.315 -23.834,-75.55 6.017,-102.079c29.846,-26.528 73.868,-22.25 102.078,6.016c86.554,86.725 70.79,130.187 57.032,218.968c-4.708,30.383 -36.171,154.909 -15.231,219.302c21.229,65.279 101.198,87.211 119.116,92.071c92.405,25.066 184.806,7.717 275.392,-51.545c-150.09,-45.343 -242.039,-146.404 -286.858,-296.675c-6.234,-17.022 -3.323,-163.783 8.881,-236.79c26.097,-156.154 32.528,-234.218 -105.174,-301.841c-38.59,-18.958 -54.51,-65.6 -35.557,-104.19c13.675,-27.848 41.774,-43.894 70.862,-43.542c11.819,-0.143 23.856,2.417 35.192,7.985c110.14,54.091 174.843,128.054 197.81,226.115c19.017,81.193 -32.669,349.343 93.147,434.433c46.893,31.714 88.441,51.393 125.874,57.25c2.361,0.369 4.682,0.726 6.977,1.071c-0.024,-0.862 -0.035,-1.738 -0.035,-2.615c0,-29.563 13.191,-57.401 36.438,-81.746c-16.913,-61.701 -26.335,-130.222 -26.335,-202.359c0,-29.559 1.582,-58.51 4.61,-86.606c-19.902,-89.725 -6.011,-159.796 14.454,-192.523c23.087,-36.917 49.389,-63.063 76.372,-81.416Zm730.794,1566.81c74.796,-18.065 129.113,-56.098 168.445,-101.71c-91.885,-2.769 -252.097,69.664 -402.584,-32.34c53.584,70.184 158.811,152.245 234.139,134.05Zm-1060.37,0c-74.797,-18.065 -129.114,-56.098 -168.446,-101.71c91.886,-2.769 252.097,69.664 402.584,-32.34c-53.584,70.184 -158.81,152.245 -234.138,134.05Zm384.552,-984.99c48.666,0 88.176,28.154 88.176,62.833c0,34.679 -39.51,62.833 -88.176,62.833c-48.666,0 -88.177,-28.154 -88.177,-62.833c0,-34.679 39.511,-62.833 88.177,-62.833Zm288.45,0c48.666,0 88.177,28.154 88.177,62.833c0,34.679 -39.511,62.833 -88.177,62.833c-48.666,0 -88.176,-28.154 -88.176,-62.833c0,-34.679 39.51,-62.833 88.176,-62.833Z" style="fill:#77aadd;"/></g></g></svg>
          <span>octo</span>
        </router-link>
        <div class="buttons d-flex">
          <div v-if="offline" class="btn btn-link disabled">
            offline
          </div>
          <router-link @click.native="hideMenu" class="btn btn-secondary d-md-none" :to="{ name: 'tags' }">
            <span class="action">tags</span>
          </router-link>
          <div class="dropdown">
            <div @click="hideMenu" class="backdrop" :class="{ hide: !showMenu }">
              <h3 class="message d-none d-md-block">try pressing <span class="shortcut btn">cmd + k</span> to toggle the shortcut menu</h3>
            </div>
            <div class="btn btn-menu btn-primary" @click.stop="toggleMenu" role="button" aria-haspopup="true" aria-expanded="false">
              <span>actions</span>
              <small class="action-shortcut d-none d-md-block">cmd + k</small>
            </div>
            <div class="dropdown-menu dropdown-menu-right" :class="{ show: showMenu }">
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'dashboard' }">
                <svg class="bi bi-file-earmark-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5v-1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h5v2.5A1.5 1.5 0 0 0 10.5 6H13v2h1V6L9 1z"/>
                  <path fill-rule="evenodd" d="M13.5 10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
                  <path fill-rule="evenodd" d="M13 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"/>
                </svg>
                <span class="action">new note <small class="action-shortcut d-none d-md-flex">
                  <span>cmd + k</span>
                  <svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                  <span>n</span>
                </small></span>
              </router-link>
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'context' }">
                <svg class="bi bi-shuffle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M12.646 1.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 4l-2.147-2.146a.5.5 0 0 1 0-.708zm0 8a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 12l-2.147-2.146a.5.5 0 0 1 0-.708z"/>
                  <path fill-rule="evenodd" d="M0 4a.5.5 0 0 1 .5-.5h2c3.053 0 4.564 2.258 5.856 4.226l.08.123c.636.97 1.224 1.865 1.932 2.539.718.682 1.538 1.112 2.632 1.112h2a.5.5 0 0 1 0 1h-2c-1.406 0-2.461-.57-3.321-1.388-.795-.755-1.441-1.742-2.055-2.679l-.105-.159C6.186 6.242 4.947 4.5 2.5 4.5h-2A.5.5 0 0 1 0 4z"/>
                  <path fill-rule="evenodd" d="M0 12a.5.5 0 0 0 .5.5h2c3.053 0 4.564-2.258 5.856-4.226l.08-.123c.636-.97 1.224-1.865 1.932-2.539C11.086 4.93 11.906 4.5 13 4.5h2a.5.5 0 0 0 0-1h-2c-1.406 0-2.461.57-3.321 1.388-.795.755-1.441 1.742-2.055 2.679l-.105.159C6.186 9.758 4.947 11.5 2.5 11.5h-2a.5.5 0 0 0-.5.5z"/>
                </svg>
                <span class="action">change context <small class="action-shortcut d-none d-md-flex">
                  <span>cmd + k</span>
                  <svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                  <span>c</span>
                </small></span>
              </router-link>
              <h6 class="dropdown-header">filters</h6>
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'actionable' }">
                <svg class="bi bi-check2-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                  <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"/>
                </svg>
                <span class="action">actionable <small class="action-shortcut d-none d-md-flex">
                  <span>cmd + k</span>
                  <svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                  <span>a</span>
                </small></span>
              </router-link>
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'recent' }">
                <svg class="bi bi-clock-history" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                  <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                <span class="action">recent <small class="action-shortcut d-none d-md-flex">
                  <span>cmd + k</span>
                  <svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                  <span>r</span>
                </small></span>
              </router-link>
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'untagged' }">
                <svg class="bi bi-file-earmark" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"/>
                  <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z"/>
                </svg>
                <span class="action">untagged <small class="action-shortcut d-none d-md-flex">
                  <span>cmd + k</span>
                  <svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                  <span>u</span>
                </small></span>
              </router-link>
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'discarded' }">
                <svg class="bi bi-trash2" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M3.18 4l1.528 9.164a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836L12.82 4H3.18zm.541 9.329A2 2 0 0 0 5.694 15h4.612a2 2 0 0 0 1.973-1.671L14 3H2l1.721 10.329z"/>
                  <path d="M14 3c0 1.105-2.686 2-6 2s-6-.895-6-2 2.686-2 6-2 6 .895 6 2z"/>
                  <path fill-rule="evenodd" d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z"/>
                </svg>
                <span class="action">discarded <small class="action-shortcut d-none d-md-flex">
                  <span>cmd + k</span>
                  <svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                  <span>d</span>
                </small></span>
              </router-link>
              <h6 class="dropdown-header">other</h6>
              <a @click="hideMenu" class="dropdown-item" target="_blank" href="https://github.com/voraciousdev/octo/issues">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bug" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6H4a3.99 3.99 0 0 1 1.333-2.982A3.983 3.983 0 0 1 8 2c1.025 0 1.959.385 2.666 1.018A3.989 3.989 0 0 1 12 6z"/>
                </svg>
                <span class="action">report issue <small class="action-shortcut d-none d-md-flex">
                  <span>cmd + k</span>
                  <svg class="bi bi-arrow-right-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                  <span>i</span>
                </small></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div v-if="context.active || context.editing" class="context-banner text-center">
        <span v-if="contextTags.length" class="context-tags">
          <span class="context-tag d-inline-flex align-items-center" v-for="tag in contextTags">
            <svg class="bi bi-hash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
            </svg>
            <span>{{ tag }}</span>
          </span>
        </span>
        <span v-else  class="context-placeholder">no active tags</span>
        <div @click="deactivateContext" class="context-close">
          <svg class="bi bi-x-square-fill" width="1.25em" height="1.25em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.854 4.854a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
          </svg>
        </div>
      </div>
      <div class="content">
        <router-view class="router"></router-view>
        <div class="card notification" :class="{ hide: !showModal }">
          <div class="card-body notification-body">
            <p>An update is available. Refresh the page to apply.</p>
            <button type="button" class="btn btn-sm btn-primary" @click="refreshPage">Refresh Now</button>
            <button type="button" class="btn btn-sm btn-secondary" @click="hideModal">Later</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Mousetrap from 'mousetrap';
import 'mousetrap/plugins/global-bind/mousetrap-global-bind.min.js';
import Tag from '@/components/Tag.vue';

import {
  BLUR_EDITOR,
  DEACTIVATE_CONTEXT,
  FOCUS_EDITOR,
} from '@/store/actions';

export default {
  name: 'app',
  components: {
    Tag,
  },
  data() {
    return {
      activeElement: null,
      showMenu: false,
      showModal: false,
    };
  },
  computed: {
    context() {
      return this.$store.state.context;
    },
    contextTags() {
      return this.context.tags.sort();
    },
    offline() {
      return !this.$store.state.online;
    },
  },
  methods: {
    bindShortcuts() {
      Mousetrap.bind('a', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.triggerActionable();
      });
      Mousetrap.bind('c', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.hideMenu();

        this.$router.push({ name: 'context' });
      });
      Mousetrap.bind('d', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.triggerDiscarded();
      });
      Mousetrap.bind('esc', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.hideMenu();
      });
      Mousetrap.bind('i', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.hideMenu();

        window.open('https://github.com/voraciousdev/octo/issues', '_blank');
      });
      Mousetrap.bind('n', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.triggerNewNote();
      });
      Mousetrap.bind('r', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.triggerRecent();
      });
      Mousetrap.bind('u', (e, shortcut) => {
        e.preventDefault();

        this.unbindShortcuts();
        this.triggerUntagged();
      });
    },
    deactivateContext() {
      this.$store.dispatch(DEACTIVATE_CONTEXT);
    },
    displayMenu() {
      this.showMenu = true;
      this.activeElement = document.activeElement;

      this.activeElement.blur();
      this.bindShortcuts();
    },
    hideMenu() {
      if (this.activeElement) {
        this.activeElement.focus();
        this.activeElement = null;
      }

      this.showMenu = false;
      this.unbindShortcuts();
    },
    hideModal() {
      this.showModal = false;
    },
    refreshPage() {
      window.location.reload(true);
    },
    triggerActionable() {
      this.hideMenu();

      if (this.$route.name !== 'actionable') {
        this.$router.push({ name: 'actionable' });
      }
    },
    triggerDiscarded() {
      this.hideMenu();

      if (this.$route.name !== 'discarded') {
        this.$router.push({ name: 'discarded' });
      }
    },
    triggerNewNote() {
      this.hideMenu();

      if (this.$route.name !== 'dashboard') {
        this.$router.push({ name: 'dashboard' });
      }
    },
    triggerRecent() {
      this.hideMenu();

      if (this.$route.name !== 'recent') {
        this.$router.push({ name: 'recent' });
      }
    },
    triggerUntagged() {
      this.hideMenu();

      if (this.$route.name !== 'untagged') {
        this.$router.push({ name: 'untagged' });
      }
    },
    toggleMenu() {
      this.showMenu ? this.hideMenu() : this.displayMenu();
    },
    unbindShortcuts() {
      Mousetrap.unbind([
        'a',
        'c',
        'd',
        'esc',
        'i',
        'n',
        'r',
        'u',
      ]);
    },
  },
  created() {
    window.addEventListener('swupdated', (event) => {
      this.showModal = true;
    });

    Mousetrap.bindGlobal('mod+k', (e, keys) => {
      this.toggleMenu();
    });
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  letter-spacing: 0.05em;
}

body {
  background-color: #111;
  font-family: 'Fira Sans', arial !important;
  margin: 0;
}

body, pre {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

pre {
  font-family: 'Fira Mono', monospace !important;
}

.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.content {
  flex-grow: 1;
  overflow: hidden;
  position: relative;
}

.router {
  height: 100%;
  overflow: auto;
  position: relative;
}

.navbar {
  background-color: #1a1a1a;
  padding: 0.5rem 1rem;
}

.navbar .navbar-brand {
  align-items: center;
  display: flex;
  font-size: 1.3em;
}

.navbar .navbar-brand svg {
  margin-right: 0.5rem;
}

.backdrop {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99;
}

.backdrop .shortcut {
  border: 1px solid #fff;
}

.navbar .buttons .btn:not(.shortcut) {
  border: none;
}

.navbar .btn-menu {
  align-items: baseline;
  display: flex;
  margin-left: 0.5rem;
}

.action-shortcut {
  color: rgba(0, 0, 0, 0.75);
  font-family: 'Fira Mono', monospace !important;
  margin-left: 0.75rem;
}

.context-banner {
  align-items: center;
  background-color: #111;
  border-bottom: 0.125rem solid #1a1a1a;
  color: #77aadd;
  display: flex;
  flex-shrink: 0;
  flex-wrap: nowrap;
  padding: 0.25rem;
  line-height: normal;
  overflow: auto;
  white-space: nowrap;
}

.context-description {
  margin-right: 1rem;
}

.context-tags {
  margin: auto;
  position: relative;
  z-index: 10;
}

.context-placeholder {
  line-height: 1.5em;
  margin: 0.25rem auto;
  padding: 0.125rem 0.5rem;
}

.context-tag {
  background-color: #77aadd;
  border-radius: 0.125rem;
  color: #111;
  margin: 0.25rem;
  padding: 0.125rem 0.5rem;
  padding-left: 0.375rem; /* offset svg padding */
}

.context-tag > span {
  line-height: 1.5em;
}

.context-close {
  align-items: center;
  background-color: #77aadd;
  border-radius: 0.125rem;
  color: #111;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.0675rem;
  position: absolute;
  right: 1rem;
  z-index: 20;
}

.dropdown-menu {
  margin-top: 1.25rem;
}

.dropdown-item {
  align-items: center;
  display: flex;
  padding: 0.5rem 1rem;
}

.dropdown-item:hover, .dropdown-item:active, .dropdown-item.active {
  background-color: #77aadd;
  border: none;
}

.dropdown-item svg {
  margin-right: 0.5rem;
}

.dropdown-item .action {
  align-items: baseline;
  display: inline-flex;
  flex-grow: 1;
  justify-content: space-between;
}

.dropdown-item .action-shortcut {
  align-items: center;
  color: #aaa;
  display: flex;
  font-family: 'Fira Mono', monospace !important;
  margin-left: 1rem;
}

.dropdown-item:hover .action-shortcut {
  color: rgba(0, 0, 0, 0.8);
}

.dropdown-item .action-shortcut svg {
  margin: 0 0.5rem;
}

.dropdown-header {
  padding: 0.5rem 1rem;
}

.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:focus {
  background-color: #77aadd !important;
  border: none;
  color: #fff !important;
}

.btn-secondary, .btn-secondary:hover, .btn-secondary:active {
  background-color: #1a1a1a;
  border: none;
  box-shadow: none !important;
  color: #77aadd;
}

.card {
  background-color: #1a1a1a;
  margin-bottom: 1em;
}

.card .btn + .btn {
  margin-left: 0.5rem;
}

a, a:hover {
  color: #77aadd;
  text-decoration: none;
}

pre {
  margin: 0;
}

.notification {
  margin: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 20rem;
  z-index: 90;
}

.notification .notification-body {
  padding: 1rem;
}

.hide {
  display: none !important;
}
</style>
