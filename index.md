---
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Denver Sprinkler Start Up and Repairs
layout: default
bodyClass: page-home
---
  {% include banner.html %}
  {% include iframe.html %}


<div class="sec">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
              <p>If you are wanting to start your sprinkler system in Denver yourself,  check out this video I made a few years ago:
              </p>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6nz-fjVI36g" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
  {% include cta1.html %}
  {% include home-tools.html %}
  {% include home-content-section.html %}
<!--   
<div class="container pt-2">
  <div class="call">
    <div class="call-box-top">
      <div class="call-phone"><strong>Chat:</strong> (chat link -> bottom-right)</div>
      <div class="call-phone"><strong>Phone: </strong> {{ site.data.contact.phone }} (via text message please) </div>
      <div class="call-email"><strong>Email: </strong>
        <a href="mailto:{{ site.data.contact.email }}">
          {{ site.data.contact.email }}
        </a>
      </div>
    </div>
    <div class="call-box-bottom">
      <a href="{{site.baseurl}}/contact" class="button">More info</a>
    </div>
  </div>
</div>
<div class="container pt-8 pt-md-10">
  <div class="row justify-content-start">
    <div class="col-12">
      <h2 class="title-3 text-dark mb-3">Sprinkler Services in Denver</h2>
    </div>
    {% for service in site.services %}
    <div class="col-12 col-md-4 mb-1">
      <div class="service service-summary">
        <div class="service-content">
          <h2 class="service-title">
            <a href="{{site.baseurl}}{{ service.url }}">{{ service.title }}</a>
          </h2>
          {{ service.content | markdownify | strip_html | truncate: 100 }}
        </div>
      </div>
    </div>
    {% endfor %}
    <div class="col-12 text-center">
      <a class="button button-primary mt-2" href="{{site.baseurl}}/services">View All Services</a>
    </div>
  </div>
</div> -->
