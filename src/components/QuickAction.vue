<template>
  <div class="container d-flex flex-column mt-3 mt-md-5">
    <h3 class="card-title">
      <span>Quick Actions</span>
    </h3>
    <h6 class="card-subtitle text-muted font-weight-normal mb-5">The Quick Action button is always visible, and its function changes depending on what screen you are on.</h6>
    <div class="mb-3">
      <h4 class="d-flex align-items-center">
        <div class="btn btn-sm btn-secondary mr-3">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-menu-button m-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
            <circle cx="8" cy="4.5" r="1"/>
          </svg>
        </div>
        <span>Info</span>
      </h4>
      <p>This button appears on an active document. It will take you to the document meta page.</p>
    </div>
    <div class="mb-3">
      <h4 class="d-flex align-items-center">
        <div class="btn btn-sm btn-secondary mr-3">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle m-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
        <span>Close</span>
      </h4>
      <p>This button shows up on all non-document screens. It will take you back to the editor.</p>
    </div>
    <div class="mb-3">
      <h4 class="d-flex align-items-center">
        <div class="btn btn-sm btn-secondary mr-3">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-question-circle m-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
          </svg>
        </div>
        <span>Help</span>
      </h4>
      <p>This button is visible on the dashboard, and it takes you to this page.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuickAction',
};
</script>
