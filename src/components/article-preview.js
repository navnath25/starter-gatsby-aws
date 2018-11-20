import React from 'react'
// import Link from 'gatsby-link'
import Img from 'gatsby-image'

// import styles from './article-preview.module.css'

export default ({ article }) => (
  <div class="col-md-8 col-xl-6 mx-auto">
    <article class="my-8">
      <header class="text-center mb-7">
        <p>
          <a class="small-4 text-lighter text-uppercase ls-2 fw-600" href="#">
            News
          </a>
        </p>
        <h3>
          <a href="post-2.html">{article.title}</a>
        </h3>
      </header>
      <a href="post-2.html" />
      <div class="card-body">
        <div class="row mb-5 small-2 text-lighter">
          <div class="col-auto">
            <a class="text-inherit" href="#">
              by Hossein
            </a>
            <span class="align-middle px-1">•</span>
          </div>

          <div class="col-auto ml-auto">
            <span>
              <i class="fa fa-eye pr-1 opacity-60" /> 25
            </span>
            <a class="text-inherit ml-5" href="#">
              <i class="fa fa-comments pr-1 opacity-60" /> 4
            </a>
          </div>
        </div>

        <p class="text-center mt-7">
          <a class="btn btn-primary btn-round" href="post-2.html">
            Read more
          </a>
        </p>
      </div>
    </article>
  </div>
)
