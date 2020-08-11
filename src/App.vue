<template>
  <div id="app">
    <main class="main">
      <nav class="navbar">
        <router-link class="navbar-brand" :to="{ name: 'dashboard' }">
          <svg height="1.25em" viewBox="0 0 152 49" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g><path d="M27.653,15.649c0,-0.677 0.551,-1.227 1.228,-1.227c0.678,0 1.226,0.55 1.226,1.227c0,0.678 -0.548,1.228 -1.226,1.228c-0.678,0 -1.228,-0.55 -1.228,-1.228m-8.461,1.228c-0.678,0 -1.227,-0.55 -1.227,-1.228c0,-0.677 0.549,-1.227 1.227,-1.227c0.678,0 1.228,0.55 1.228,1.227c0,0.678 -0.55,1.228 -1.228,1.228m28.297,8.015c-0.545,-0.3 -1.228,-0.101 -1.528,0.444c-2.024,3.685 -5.129,5.271 -9.736,4.952c-3.258,-0.264 -4.79,-2.195 -4.79,-2.195c2.539,0.784 5.078,0.57 5.078,0.57c0.381,0 0.761,-0.025 1.136,-0.076c2.59,-0.348 4.686,-1.885 5.753,-4.219c1.037,-2.268 1.042,-4.45 0.011,-6.143c-0.888,-1.461 -2.479,-2.385 -4.252,-2.471c-1.434,-0.071 -2.329,0.466 -2.827,0.93c-1.142,1.06 -1.212,2.585 -1.216,2.756c-0.016,0.621 0.474,1.138 1.095,1.153c0.621,0.016 1.132,-0.471 1.154,-1.087c0.01,-0.211 0.12,-0.83 0.506,-1.182c0.268,-0.243 0.653,-0.348 1.178,-0.324c1.027,0.051 1.939,0.572 2.44,1.395c0.631,1.035 0.582,2.469 -0.135,4.037c-0.749,1.64 -2.173,2.679 -4.007,2.925c-2.778,0.375 -5.891,-1.141 -8.322,-4.05c-0.055,-0.066 -0.117,-0.123 -0.184,-0.173c0,-0.014 0.001,-0.027 0,-0.041c0,0 -0.971,-2.404 1.075,-3.938c0,0 2.301,0.205 2.454,-2.199c0.154,-2.404 -1.841,-1.636 -1.841,-3.529c0,-1.892 0.921,0 0.921,-5.421c0,-5.062 -3.631,-7.006 -7.415,-7.006c-3.785,0 -7.415,1.944 -7.415,7.006c-0.001,5.421 0.919,3.529 0.919,5.421c0,1.893 -1.994,1.125 -1.841,3.529c0.154,2.404 2.455,2.199 2.455,2.199c2.046,1.534 1.074,3.938 1.074,3.938l0,0.041c-0.066,0.05 -0.129,0.107 -0.183,0.173c-2.432,2.909 -5.545,4.425 -8.323,4.05c-1.834,-0.246 -3.258,-1.285 -4.007,-2.925c-0.717,-1.568 -0.764,-3.002 -0.135,-4.037c0.502,-0.823 1.414,-1.344 2.441,-1.394c0.524,-0.025 0.91,0.08 1.177,0.324c0.386,0.351 0.497,0.97 0.507,1.181c0.021,0.617 0.532,1.103 1.153,1.087c0.621,-0.015 1.112,-0.532 1.097,-1.153c-0.005,-0.171 -0.075,-1.696 -1.217,-2.756c-0.498,-0.464 -1.393,-1.001 -2.827,-0.93c-1.773,0.086 -3.363,1.01 -4.253,2.471c-1.03,1.693 -1.026,3.875 0.011,6.143c1.067,2.334 3.163,3.871 5.753,4.219c0.376,0.051 0.755,0.076 1.137,0.076c0,0 2.538,0.214 5.077,-0.57c0,0 -1.532,1.931 -4.79,2.195c-4.607,0.319 -7.711,-1.267 -9.736,-4.952c-0.3,-0.545 -0.983,-0.744 -1.527,-0.444c-0.545,0.299 -0.744,0.983 -0.445,1.527c2.27,4.132 5.741,6.161 10.573,6.161c0.703,0 1.437,-0.043 2.198,-0.128c1.421,-0.161 2.627,-0.455 3.653,-0.828c-0.926,2.333 -2.698,5.702 -5.618,7.316c-2.178,1.203 -3.664,0.829 -4.329,0.078c-0.488,-0.553 -0.548,-1.293 -0.149,-1.84c0.37,-0.51 0.649,-0.53 0.741,-0.536c0.468,-0.029 1.066,0.423 1.279,0.643c0.426,0.453 1.138,0.476 1.59,0.05c0.453,-0.425 0.476,-1.137 0.05,-1.59c-0.14,-0.15 -1.419,-1.449 -3.055,-1.349c-0.652,0.04 -1.603,0.327 -2.426,1.458c-1.017,1.399 -0.901,3.311 0.284,4.653c0.733,0.83 1.911,1.464 3.441,1.464c1.063,0 2.293,-0.305 3.663,-1.061c1.851,-1.024 3.294,-2.577 4.402,-4.206c-0.115,0.742 -0.064,1.512 -0.065,2.314c-0.007,6.805 3.59,8.563 4.897,8.943c0.105,0.03 0.209,0.045 0.314,0.045c0.487,0 0.936,-0.32 1.08,-0.813c0.173,-0.596 -0.171,-1.22 -0.767,-1.394c-0.817,-0.236 -1.664,-0.929 -2.365,-2.883c-0.746,-2.08 -0.64,-4.403 0.349,-6.378c0.831,-1.653 2.161,-3.379 4.157,-3.602c1.997,0.223 3.327,1.949 4.156,3.602c0.989,1.975 1.096,4.298 0.349,6.378c-0.7,1.954 -1.547,2.647 -2.364,2.883c-0.597,0.174 -0.94,0.798 -0.767,1.394c0.143,0.493 0.592,0.813 1.08,0.813c0.104,0 0.209,-0.015 0.314,-0.045c1.307,-0.38 4.903,-2.138 4.898,-8.943c-0.001,-0.802 0.048,-1.572 -0.066,-2.314c1.108,1.629 2.552,3.182 4.402,4.206c1.371,0.756 2.601,1.061 3.662,1.061c1.531,0 2.708,-0.634 3.442,-1.464c1.185,-1.342 1.3,-3.254 0.284,-4.653c-0.824,-1.131 -1.773,-1.418 -2.426,-1.458c-1.637,-0.1 -2.916,1.199 -3.056,1.349c-0.425,0.453 -0.403,1.165 0.051,1.59c0.453,0.426 1.164,0.403 1.589,-0.05c0.214,-0.22 0.813,-0.672 1.28,-0.643c0.091,0.006 0.371,0.026 0.741,0.534c0.399,0.549 0.339,1.289 -0.149,1.842c-0.665,0.751 -2.15,1.125 -4.329,-0.078c-2.92,-1.615 -4.691,-4.983 -5.617,-7.316c1.025,0.373 2.231,0.667 3.651,0.827c0.762,0.086 1.496,0.129 2.199,0.129c4.833,0 8.304,-2.029 10.573,-6.161c0.3,-0.544 0.1,-1.228 -0.444,-1.527" style="fill:#e28e68;fill-rule:nonzero;"/><path d="M95.254,16.33c-6.423,0 -11.652,5.227 -11.652,11.652c0,6.424 5.229,11.652 11.652,11.652c3.705,0 7.106,-1.703 9.33,-4.671c0.509,-0.679 0.371,-1.646 -0.307,-2.156c-0.68,-0.508 -1.647,-0.369 -2.155,0.308c-1.638,2.186 -4.142,3.44 -6.868,3.44c-4.727,0 -8.572,-3.846 -8.572,-8.573c0,-4.727 3.845,-8.574 8.572,-8.574c2.31,0 4.476,0.906 6.099,2.549c0.594,0.601 1.572,0.61 2.179,0.014c0.602,-0.596 0.609,-1.574 0.012,-2.179c-2.207,-2.232 -5.152,-3.462 -8.29,-3.462" style="fill:#e28e68;fill-rule:nonzero;"/><path d="M109.286,21.758l1.562,0l0.036,10.359c0,4.143 3.368,7.512 7.511,7.512c4.142,0 7.511,-3.369 7.511,-7.512c0,-2.67 -1.437,-5.161 -3.749,-6.501l-0.001,-0.001c-0.356,-0.206 -0.77,-0.26 -1.166,-0.156c-0.397,0.106 -0.729,0.361 -0.937,0.717c-0.205,0.355 -0.262,0.769 -0.155,1.167c0.105,0.397 0.359,0.73 0.715,0.936c1.366,0.793 2.216,2.262 2.216,3.838c0,2.444 -1.99,4.433 -4.434,4.433c-2.443,0 -4.433,-1.989 -4.433,-4.433l-0.035,-10.359l7.521,0c0.849,0 1.54,-0.691 1.54,-1.539c0,-0.85 -0.691,-1.54 -1.54,-1.54l-7.533,0l-0.022,-4.734c-0.003,-0.845 -0.693,-1.532 -1.538,-1.532c-0.856,0.003 -1.544,0.697 -1.54,1.546l0.02,4.72l-1.549,0c-0.85,0 -1.541,0.69 -1.541,1.54c0,0.848 0.691,1.539 1.541,1.539" style="fill:#e28e68;fill-rule:nonzero;"/><path d="M68.814,36.555c-1.444,0 -2.878,-0.371 -4.145,-1.074l-0.091,-0.067c-0.431,-0.425 -0.762,-0.944 -0.955,-1.499c-0.714,-2.042 0.37,-4.286 2.416,-5.003c1.321,-0.46 2.8,-0.181 3.859,0.727c0.643,0.553 1.618,0.475 2.171,-0.168c0.55,-0.644 0.475,-1.617 -0.171,-2.17c-1.893,-1.622 -4.526,-2.119 -6.877,-1.294c-1.674,0.586 -3.054,1.783 -3.885,3.369l-0.601,1.147l-0.191,-1.281c-0.07,-0.471 -0.103,-0.871 -0.103,-1.26c0,-4.727 3.846,-8.573 8.573,-8.573c4.728,0 8.573,3.846 8.573,8.573c0,4.727 -3.845,8.573 -8.573,8.573m0,-20.225c-6.425,0 -11.652,5.227 -11.652,11.652c0,4.046 2.068,7.745 5.531,9.896c0.161,0.129 0.287,0.205 0.434,0.267c1.762,0.981 3.717,1.489 5.687,1.489c6.425,0 11.652,-5.227 11.652,-11.652c0,-6.425 -5.227,-11.652 -11.652,-11.652" style="fill:#e28e68;fill-rule:nonzero;"/><path d="M148.609,29.743l-0.27,1.297l-0.531,-1.214c-0.782,-1.79 -2.276,-3.18 -4.099,-3.819c-2.355,-0.826 -4.989,-0.328 -6.882,1.294c-0.643,0.553 -0.718,1.527 -0.164,2.171c0.553,0.644 1.526,0.717 2.171,0.166c1.055,-0.907 2.53,-1.189 3.856,-0.726c2.045,0.717 3.129,2.961 2.417,5.005c-0.225,0.642 -0.612,1.216 -1.121,1.659l-0.242,0.212c-1.121,0.509 -2.308,0.767 -3.525,0.767c-4.727,0 -8.572,-3.847 -8.572,-8.574c0,-4.727 3.845,-8.572 8.572,-8.572c4.728,0 8.573,3.845 8.573,8.572c0,0.585 -0.061,1.178 -0.183,1.762m-8.39,-13.413c-6.425,0 -11.652,5.227 -11.652,11.651c0,6.425 5.227,11.652 11.652,11.652c6.426,0 11.652,-5.227 11.652,-11.652c0,-6.424 -5.226,-11.651 -11.652,-11.651" style="fill:#e28e68;fill-rule:nonzero;"/></g></svg>
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
            <div class="btn btn-menu btn-primary d-flex justify-space-between align-items-center" @click.stop="toggleMenu" role="button" aria-haspopup="true" aria-expanded="false">
              <svg width="0.75em" height="0.75em" viewBox="0 0 16 16" class="bi bi-lightning-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
              </svg>
              <span>actions</span>
              <small class="action-shortcut d-none d-md-block">cmd + k</small>
            </div>
            <div class="dropdown-menu dropdown-menu-right" :class="{ show: showMenu }">
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'dashboard' }">
                <svg class="bi bi-file-earmark-plus" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                <svg class="bi bi-shuffle" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'documents' }">
                <svg width="0.9em" height="0.9em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
                <span class="action">search <small class="action-shortcut d-none d-md-flex">
                  <span>cmd + shift + f</span>
                </small></span>
              </router-link>
              <h6 class="dropdown-header">filters</h6>
              <router-link @click.native="hideMenu" class="dropdown-item" :to="{ name: 'actionable' }">
                <svg class="bi bi-check2-square" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                <svg class="bi bi-clock-history" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                <svg class="bi bi-file-earmark" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                <svg class="bi bi-trash2" width="0.9em" height="0.9em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                <svg width="0.9em" height="0.9em" viewBox="0 0 16 16" class="bi bi-bug" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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

    Mousetrap.bindGlobal('mod+shift+f', (e, keys) => {
      this.hideMenu();
      this.$router.push({ name: 'documents' });
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

a, a:hover {
  text-decoration: none;
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
  color: #aaa;
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
  background-color: #1a1a1a;
  border-radius: 0.125rem;
  color: #aaa;
  margin: 0.25rem;
  padding: 0.125rem 0.5rem;
  padding-left: 0.375rem; /* offset svg padding */
}

.context-tag > span {
  line-height: 1.5em;
}

.context-close {
  align-items: center;
  background-color: #aaa;
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
  background-color: #333;
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
  background-color: #557bab !important;
  border: none;
  color: #fff !important;
}

.btn-secondary, .btn-secondary:hover, .btn-secondary:active, .btn-secondary:focus {
  background-color: #1a1a1a !important;
  border: none;
  box-shadow: none !important;
  color: #aaa;
}

.monospace {
  font-family: 'Fira Mono', monospace !important;
}

.card {
  background-color: #1a1a1a;
  margin-bottom: 1em;
}

.card .btn + .btn {
  margin-left: 0.5rem;
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

svg {
  flex-shrink: 0;
  margin-right: 0.5em;
}
</style>
