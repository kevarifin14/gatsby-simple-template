import React from 'react';

import SEO from 'components/seo';
import './styles.scss';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <div
          class="container"
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-easing="ease"
        >
          <h1 class="title">
            Your Website Here
          </h1>
          <h2 class="subtitle">
            Good to go
          </h2>
        </div>
      </div>
    </section>
  </>
);

export default IndexPage;
