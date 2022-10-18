import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import Other from '../../components/story/Other';

const Story = () => {

  const { id } = useParams();

  const markup = {
    __html: `<div> <header class="ssrcss-1eqcsb1-HeadingWrapper e1nh2i2l5">
    <h1
      tabindex="-1"
      id="main-heading"
      class="ssrcss-15xko80-StyledHeading e1fj1fc10"
    >
      Who is Jeremy Hunt? New UK chancellor who backed Sunak in leadership race
    </h1>
    <div>
      <ul role="list" class="ssrcss-w45j7g-MetadataStripContainer e1ojgjhb3">
        <div class="ssrcss-13nu8ri-GroupChildrenForWrapping e1ojgjhb2">
          <li role="listitem" class="ssrcss-30fcoe-MetadataStripItem e1ojgjhb1">
            <div class="visually-hidden ssrcss-1f39n02-VisuallyHidden e1y6uwnp0">
              Published
            </div>
            <div class="ssrcss-m5j4pi-MetadataContent e1ojgjhb0">
              <span class="ssrcss-1pvwv4b-MetadataSnippet ecn1o5v3"
                ><span class="ssrcss-1if1g9v-MetadataText ecn1o5v1"
                  ><time
                    data-testid="timestamp"
                    datetime="2022-10-14T17:57:40.000Z"
                    ><span
                      data-testid="time-and-date:clock"
                      class="ssrcss-1mh4yp1-IconContainer ecn1o5v0"
                      ><svg
                        viewBox="0 0 32 32"
                        width="1em"
                        height="1em"
                        class="ssrcss-xi5oyi-StyledIcon e6m7o991"
                        focusable="false"
                        aria-hidden="true"
                      >
                        <path
                          d="M16 31c8.5 0 15-6.5 15-15S24.5 1 16 1 1 7.5 1 16s6.5 15 15 15zm0-2.7C9 28.3 3.7 23 3.7 16S9 3.7 16 3.7C23 3.7 28.3 9 28.3 16S23 28.3 16 28.3zm6.2-6.7 1-1.5-5.7-4.5-.6-8.6H15l-.7 10.5 7.9 4.1z"
                        ></path></svg></span
                    >2 days ago</time
                  ></span
                ></span
              >
            </div>
          </li>
        </div>
      </ul>
    </div>
    <div class="ssrcss-11faxz6-TagShareWrapper e1nh2i2l0">
      <div class="ssrcss-1ynay8h-StyledInformationPanel e15ad6a66">
        <div>
          <div>
            <button
              width="content-length"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              class="ssrcss-i42p3a-Button etotop31"
            >
              <span
                data-testid="actions:share"
                class="ssrcss-1a1fy59-IconWrapper etotop30"
                ><svg
                  viewBox="0 0 32 32"
                  width="1em"
                  height="1em"
                  class="ssrcss-xi5oyi-StyledIcon e6m7o991"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    d="M7.8 17 25.3 7l-1.2-2.3L6.6 15l1.2 2zm-1.2 0 17.5 10.3 1.2-2.3L7.8 15l-1.2 2zm5.6-1c0-2.7-2.2-5-5-5-2.7 0-4.9 2.2-4.9 5 0 2.7 2.2 4.9 4.9 4.9 2.8 0 5-2.2 5-4.9zM29.7 5.9c0-2.7-2.2-5-5-5-2.7 0-4.9 2.2-4.9 5 0 2.7 2.2 4.9 4.9 4.9 2.8 0 5-2.2 5-4.9zm0 20.2c0-2.7-2.2-5-5-5-2.7 0-4.9 2.2-4.9 5 0 2.7 2.2 4.9 4.9 4.9 2.8.1 5-2.2 5-4.9z"
                  ></path></svg
                ><span
                  class="visually-hidden ssrcss-1f39n02-VisuallyHidden e1y6uwnp0"
                  >Share</span
                ></span
              >
            </button>
          </div>
        </div>
        <div
          hidden=""
          role="group"
          aria-labelledby="share-tools-panel"
          data-testid="information-panel-content"
          class="ssrcss-1bpq5d-StyledPanelContent e15ad6a65"
        >
          <div class="ssrcss-4pcgwu-ContentWrapper e15ad6a64">
            <div class="ssrcss-tt825r-CloseButtonWrapper e15ad6a62">
              <button
                width="content-length"
                type="button"
                class="ssrcss-1iwzhjp-Button etotop31"
              >
                <span
                  data-testid="actions:close"
                  class="ssrcss-1a1fy59-IconWrapper etotop30"
                  ><svg
                    viewBox="0 0 32 32"
                    width="1em"
                    height="1em"
                    class="ssrcss-xi5oyi-StyledIcon e6m7o991"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path
                      d="m30 4.6-2.8-2.8L2 27.4l2.8 2.8L30 4.6zM4.8 1.8 1.9 4.7l25.2 25.5 2.9-2.9L4.8 1.8z"
                    ></path></svg
                  ><span
                    class="visually-hidden ssrcss-1f39n02-VisuallyHidden e1y6uwnp0"
                    >close</span
                  ></span
                >
              </button>
            </div>
            <div class="ssrcss-16sh5ob-PanelWrapper e15ad6a63">
              <div
                id="share-tools-panel"
                aria-hidden="true"
                class="ssrcss-1t42267-StyledTitleArea e15ad6a61"
              >
                Share page
              </div>
              <div>
                <button
                  width="full"
                  type="button"
                  class="ssrcss-1v2rvfo-Button etotop31"
                >
                  <span
                    data-testid="actions:link"
                    class="ssrcss-1tz2bh9-IconWrapper etotop30"
                    ><svg
                      viewBox="0 0 32 32"
                      width="1em"
                      height="1em"
                      class="ssrcss-xi5oyi-StyledIcon e6m7o991"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path
                        d="m20.7 9.5-11 11.1 1.8 1.8 11.1-11.1-1.9-1.8zm.6 6.3-2 2c2.1 1.4 5.9.8 8.7-2l.6-.6c3-3 3.9-7.6-.1-11.7-4-4-8.6-3-11.6 0l-.6.5c-3 3-3.5 6.7-2 8.7l2-2c-.3-1.1-.2-2.7 2-4.9l.6-.6c2.4-2.4 5.4-2.5 7.9 0 2.5 2.6 2.4 5.5 0 7.9l-.6.6c-2.2 2.3-3.9 2.4-4.9 2.1zm-5.5 5.5c.3 1 .2 2.7-2 4.8l-.6.6c-2.4 2.4-5.4 2.5-7.9 0s-2.4-5.5 0-7.9l.6-.6c2.1-2.1 3.8-2.3 4.9-2l2-2c-2-1.4-5.7-.9-8.7 2l-.6.6c-3 3-4 7.6 0 11.6s8.6 3.1 11.7.1l.6-.6c2.9-2.9 3.5-6.7 2-8.7l-2 2.1z"
                      ></path></svg></span
                  >Share link
                </button>
              </div>
              <a
                href="https://www.bbc.co.uk/usingthebbc/terms/can-i-share-things-from-the-bbc"
                class="ssrcss-18h2t1m-StyledLink ezys19s0"
                >About sharing</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div
    data-component="image-block"
    class="ssrcss-vk3nhx-ComponentWrapper ep2nwvo1"
  >
    <figure class="ssrcss-wpgbih-StyledFigure e34k3c23">
      <div class="ssrcss-ab5fd8-StyledFigureContainer e34k3c21">
        <span class="ssrcss-11kpz0x-Placeholder e16icw910"
          ><picture
            ><source
              srcset="
                https://ichef.bbci.co.uk/news/240/cpsprodpb/D773/production/_127155155_gettyimages-1241816451.jpg.webp 240w,
                https://ichef.bbci.co.uk/news/320/cpsprodpb/D773/production/_127155155_gettyimages-1241816451.jpg.webp 320w,
                https://ichef.bbci.co.uk/news/480/cpsprodpb/D773/production/_127155155_gettyimages-1241816451.jpg.webp 480w,
                https://ichef.bbci.co.uk/news/624/cpsprodpb/D773/production/_127155155_gettyimages-1241816451.jpg.webp 624w,
                https://ichef.bbci.co.uk/news/800/cpsprodpb/D773/production/_127155155_gettyimages-1241816451.jpg.webp 800w,
                https://ichef.bbci.co.uk/news/976/cpsprodpb/D773/production/_127155155_gettyimages-1241816451.jpg.webp 976w
              "
              type="image/webp" />
            <img
              alt="Jeremy Hunt"
              srcset="
                https://ichef.bbci.co.uk/news/240/cpsprodpb/D773/production/_127155155_gettyimages-1241816451.jpg 240w,
                https://ichef.bbci.co.uk/news/320/cpsprodpb/D773/production/_127155155_gettyimages-1241816451.jpg 320w,
                https://ichef.bbci.co.uk/news/480/cpsprodpb/D773/production/_127155155_gettyimages-1241816451.jpg 480w,
                https://ichef.bbci.co.uk/news/624/cpsprodpb/D773/production/_127155155_gettyimages-1241816451.jpg 624w,
                https://ichef.bbci.co.uk/news/800/cpsprodpb/D773/production/_127155155_gettyimages-1241816451.jpg 800w,
                https://ichef.bbci.co.uk/news/976/cpsprodpb/D773/production/_127155155_gettyimages-1241816451.jpg 976w
              "
              type="image/jpeg"
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/D773/production/_127155155_gettyimages-1241816451.jpg"
              width="976"
              height="549"
              loading="eager"
              class="ssrcss-evoj7m-Image ee0ct7c0" /></picture></span
        ><span role="text" class="ssrcss-tvuve5-StyledFigureCopyright e34k3c20"
          ><span class="visually-hidden ssrcss-1f39n02-VisuallyHidden e1y6uwnp0"
            >Image source, </span
          >Getty Images</span
        >
      </div>
    </figure>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        <b class="ssrcss-hmf8ql-BoldText e5tfeyi3"
          >Jeremy Hunt, who has previously served as health secretary and foreign
          secretary, has been named as the UK's new chancellor.
        </b>
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        He takes over at a critical time for the UK economy after weeks of
        financial turmoil and uncertainty over the recently proposed mini-budget.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        His predecessor Kwasi Kwarteng has been sacked by the prime minister.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        Mr Hunt is a big name in the Conservative party - and has twice
        unsuccessfully tried to become the party leader.
      </p>
    </div>
  </div>
  <div id="dotcom-mpu_mid" class="dotcom-ad lazy" data-ad-slot="{}"></div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        In the leadership race this year, he put his weight behind former
        chancellor Rishi Sunak over Liz Truss. This was after getting eliminated
        from the contest himself early on, having failed to get enough votes to go
        any further.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        He had stood for the top job before - and in 2019 he nearly made it,
        finishing second in the leadership race with Boris Johnson named as the
        winner.
      </p>
    </div>
  </div>
  <div id="piano-inline1">
    <div class="tp-container-inner" style="height: 118px; width: 659px">
      <iframe
        id="offer_0e763acc7b457c03340a-0"
        name="offer_0e763acc7b457c03340a-0"
        title="offer_0e763acc7b457c03340a-0"
        scrolling="no"
        allowtransparency="true"
        allow="payment"
        allowfullscreen="true"
        src="https://buy.tinypass.com/checkout/template/cacheableShow?aid=tYOkq7qlAI&amp;templateId=OTBYI8Q89QWC&amp;templateVariantId=OTV0YFYSXVQWV&amp;offerId=fakeOfferId&amp;experienceId=EXAWX60BX4NU&amp;iframeId=offer_0e763acc7b457c03340a-0&amp;displayMode=inline&amp;widget=template&amp;url=https%3A%2F%2Fwww.bbc.com"
        frameborder="0"
        style="
          overflow: hidden;
          background-color: transparent;
          border: 0px;
          width: 659px;
          height: 118px;
        "
      ></iframe>
    </div>
  </div>
  <div
    data-component="image-block"
    class="ssrcss-18mjolk-ComponentWrapper ep2nwvo1"
  >
    <figure class="ssrcss-wpgbih-StyledFigure e34k3c23">
      <div class="ssrcss-ab5fd8-StyledFigureContainer e34k3c21">
        <span class="ssrcss-1exovz1-Placeholder e16icw910"
          ><span
            ><picture
              ><source
                srcset="
                  https://ichef.bbci.co.uk/news/240/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 240w,
                  https://ichef.bbci.co.uk/news/320/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 320w,
                  https://ichef.bbci.co.uk/news/480/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 480w,
                  https://ichef.bbci.co.uk/news/624/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 624w,
                  https://ichef.bbci.co.uk/news/800/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 800w,
                  https://ichef.bbci.co.uk/news/976/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 976w
                "
                type="image/webp" />
              <img
                alt="2px presentational grey line"
                srcset="
                  https://ichef.bbci.co.uk/news/240/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 240w,
                  https://ichef.bbci.co.uk/news/320/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 320w,
                  https://ichef.bbci.co.uk/news/480/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 480w,
                  https://ichef.bbci.co.uk/news/624/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 624w,
                  https://ichef.bbci.co.uk/news/800/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 800w,
                  https://ichef.bbci.co.uk/news/976/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 976w
                "
                type="image/png"
                src="https://ichef.bbci.co.uk/news/640/cpsprodpb/1226D/production/_105894347_grey_line-nc.png"
                width="640"
                height="2"
                loading="lazy"
                class="ssrcss-evoj7m-Image ee0ct7c0" /></picture
            ><noscript
              ><picture
                ><source
                  srcset="
                    https://ichef.bbci.co.uk/news/240/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 240w,
                    https://ichef.bbci.co.uk/news/320/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 320w,
                    https://ichef.bbci.co.uk/news/480/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 480w,
                    https://ichef.bbci.co.uk/news/624/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 624w,
                    https://ichef.bbci.co.uk/news/800/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 800w,
                    https://ichef.bbci.co.uk/news/976/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 976w
                  "
                  type="image/webp" />
                <img
                  alt="2px presentational grey line"
                  srcset="
                    https://ichef.bbci.co.uk/news/240/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 240w,
                    https://ichef.bbci.co.uk/news/320/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 320w,
                    https://ichef.bbci.co.uk/news/480/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 480w,
                    https://ichef.bbci.co.uk/news/624/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 624w,
                    https://ichef.bbci.co.uk/news/800/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 800w,
                    https://ichef.bbci.co.uk/news/976/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 976w
                  "
                  type="image/png"
                  src="https://ichef.bbci.co.uk/news/640/cpsprodpb/1226D/production/_105894347_grey_line-nc.png"
                  width="640"
                  height="2"
                  loading="lazy"
                  class="ssrcss-evoj7m-Image ee0ct7c0" /></picture></noscript></span
        ></span>
      </div>
    </figure>
  </div>
  <div
    data-component="subheadline-block"
    class="ssrcss-dm4ypg-ComponentWrapper-HeadlineComponentWrapper egtrm1f0"
  >
    <h2
      tabindex="-1"
      id="Jeremy-Hunt-The-basics"
      class="ssrcss-y2fd7s-StyledHeading e1fj1fc10"
    >
      <span role="text">Jeremy Hunt: The basics</span>
    </h2>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        <b class="ssrcss-hmf8ql-BoldText e5tfeyi3">Age:</b> 55
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        <b class="ssrcss-hmf8ql-BoldText e5tfeyi3">Childhood:</b> Grew up in
        Godalming, Surrey
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        <b class="ssrcss-hmf8ql-BoldText e5tfeyi3">Education:</b> Oxford
        University, obtaining a First in philosophy, politics and economics
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        <b class="ssrcss-hmf8ql-BoldText e5tfeyi3">Family: </b>Married to Lucia
        Hunt, three children
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        <b class="ssrcss-hmf8ql-BoldText e5tfeyi3">Parliamentary constituency:</b>
        South West Surrey
      </p>
    </div>
  </div>
  <div
    data-component="image-block"
    class="ssrcss-18mjolk-ComponentWrapper ep2nwvo1"
  >
    <figure class="ssrcss-wpgbih-StyledFigure e34k3c23">
      <div class="ssrcss-ab5fd8-StyledFigureContainer e34k3c21">
        <span class="ssrcss-1exovz1-Placeholder e16icw910"
          ><span
            ><picture
              ><source
                srcset="
                  https://ichef.bbci.co.uk/news/240/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 240w,
                  https://ichef.bbci.co.uk/news/320/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 320w,
                  https://ichef.bbci.co.uk/news/480/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 480w,
                  https://ichef.bbci.co.uk/news/624/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 624w,
                  https://ichef.bbci.co.uk/news/800/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 800w,
                  https://ichef.bbci.co.uk/news/976/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 976w
                "
                type="image/webp" />
              <img
                alt="2px presentational grey line"
                srcset="
                  https://ichef.bbci.co.uk/news/240/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 240w,
                  https://ichef.bbci.co.uk/news/320/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 320w,
                  https://ichef.bbci.co.uk/news/480/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 480w,
                  https://ichef.bbci.co.uk/news/624/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 624w,
                  https://ichef.bbci.co.uk/news/800/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 800w,
                  https://ichef.bbci.co.uk/news/976/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 976w
                "
                type="image/png"
                src="https://ichef.bbci.co.uk/news/640/cpsprodpb/1226D/production/_105894347_grey_line-nc.png"
                width="640"
                height="2"
                loading="lazy"
                class="ssrcss-evoj7m-Image ee0ct7c0" /></picture
            ><noscript
              ><picture
                ><source
                  srcset="
                    https://ichef.bbci.co.uk/news/240/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 240w,
                    https://ichef.bbci.co.uk/news/320/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 320w,
                    https://ichef.bbci.co.uk/news/480/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 480w,
                    https://ichef.bbci.co.uk/news/624/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 624w,
                    https://ichef.bbci.co.uk/news/800/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 800w,
                    https://ichef.bbci.co.uk/news/976/cpsprodpb/1226D/production/_105894347_grey_line-nc.png.webp 976w
                  "
                  type="image/webp" />
                <img
                  alt="2px presentational grey line"
                  srcset="
                    https://ichef.bbci.co.uk/news/240/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 240w,
                    https://ichef.bbci.co.uk/news/320/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 320w,
                    https://ichef.bbci.co.uk/news/480/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 480w,
                    https://ichef.bbci.co.uk/news/624/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 624w,
                    https://ichef.bbci.co.uk/news/800/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 800w,
                    https://ichef.bbci.co.uk/news/976/cpsprodpb/1226D/production/_105894347_grey_line-nc.png 976w
                  "
                  type="image/png"
                  src="https://ichef.bbci.co.uk/news/640/cpsprodpb/1226D/production/_105894347_grey_line-nc.png"
                  width="640"
                  height="2"
                  loading="lazy"
                  class="ssrcss-evoj7m-Image ee0ct7c0" /></picture></noscript></span
        ></span>
      </div>
    </figure>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        Mr Hunt, the fourth chancellor this year, was brought up in the Surrey
        town of Godalming and attended Charterhouse School, where he became head
        boy and was known for his love of cross-country running.
      </p>
    </div>
  </div>
  <div id="piano-inline2"></div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        At Oxford University he put his name out into the political sphere when he
        served as president of the Conservative Association.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        But prior to his career in parliament, Mr Hunt had a career as an English
        teacher in Japan and as an entrepreneur - co-founding the Hotcourses
        education publisher. When the business was sold in 2017, he netted a
        reported £14m, making him one of the UK's richest politicians. Mr Hunt
        said he would use the money to fund campaigns after he leaves politics.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        Mr Hunt was first elected to parliament at the 2005 general election,
        taking over from Virginia Bottomley as the MP for South West Surrey.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        From 2005 to 2007 he was the shadow minister for disabled people as a
        reward for supporting David Cameron - who attended Oxford University at
        the same time as him - in the Conservative leadership contest.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        Then when the Conservative-Liberal Democrat coalition government was
        formed in 2010, Mr Hunt joined the cabinet as secretary of state for
        culture, Olympics, media and sport.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        It was an important role in the run-up to the 2012 London Olympics, during
        which he worked closely with Mr Johnson, who was Mayor of London at the
        time.
      </p>
    </div>
  </div>
  <div id="piano-inline3"></div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        Earlier in 2012, he faced calls to resign over his role in the BSkyB
        takeover bid. The then Labour leader Ed Miliband said Mr Hunt should quit
        over his contacts with Rupert Murdoch's media empire while he was
        considering the bid, which was later withdrawn.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        But he survived the row and in September 2012, was appointed heath
        secretary.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        He held office during a slow period of investment in the NHS which created
        big problems, amid times when demands on the health service were growing.
      </p>
    </div>
  </div>
  <div
    data-component="image-block"
    class="ssrcss-18mjolk-ComponentWrapper ep2nwvo1"
  >
    <figure class="ssrcss-wpgbih-StyledFigure e34k3c23">
      <div class="ssrcss-ab5fd8-StyledFigureContainer e34k3c21">
        <span class="ssrcss-1hq4gmv-Placeholder e16icw910"
          ><span
            ><picture
              ><source
                srcset="
                  https://ichef.bbci.co.uk/news/240/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg.webp 240w,
                  https://ichef.bbci.co.uk/news/320/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg.webp 320w,
                  https://ichef.bbci.co.uk/news/480/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg.webp 480w,
                  https://ichef.bbci.co.uk/news/624/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg.webp 624w,
                  https://ichef.bbci.co.uk/news/800/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg.webp 800w,
                  https://ichef.bbci.co.uk/news/976/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg.webp 976w
                "
                type="image/webp" />
              <img
                alt="Junior Doctors on a picket line outside St Thomas Hospital on 10 February 10 2016"
                srcset="
                  https://ichef.bbci.co.uk/news/240/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg 240w,
                  https://ichef.bbci.co.uk/news/320/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg 320w,
                  https://ichef.bbci.co.uk/news/480/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg 480w,
                  https://ichef.bbci.co.uk/news/624/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg 624w,
                  https://ichef.bbci.co.uk/news/800/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg 800w,
                  https://ichef.bbci.co.uk/news/976/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg 976w
                "
                type="image/jpeg"
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg"
                width="976"
                height="549"
                loading="lazy"
                class="ssrcss-evoj7m-Image ee0ct7c0" /></picture
            ><noscript
              ><picture
                ><source
                  srcset="
                    https://ichef.bbci.co.uk/news/240/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg.webp 240w,
                    https://ichef.bbci.co.uk/news/320/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg.webp 320w,
                    https://ichef.bbci.co.uk/news/480/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg.webp 480w,
                    https://ichef.bbci.co.uk/news/624/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg.webp 624w,
                    https://ichef.bbci.co.uk/news/800/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg.webp 800w,
                    https://ichef.bbci.co.uk/news/976/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg.webp 976w
                  "
                  type="image/webp" />
                <img
                  alt="Junior Doctors on a picket line outside St Thomas Hospital on 10 February 10 2016"
                  srcset="
                    https://ichef.bbci.co.uk/news/240/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg 240w,
                    https://ichef.bbci.co.uk/news/320/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg 320w,
                    https://ichef.bbci.co.uk/news/480/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg 480w,
                    https://ichef.bbci.co.uk/news/624/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg 624w,
                    https://ichef.bbci.co.uk/news/800/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg 800w,
                    https://ichef.bbci.co.uk/news/976/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg 976w
                  "
                  type="image/jpeg"
                  src="https://ichef.bbci.co.uk/news/976/cpsprodpb/0FE1/production/_127156040_nhsstrike.jpg"
                  width="976"
                  height="549"
                  loading="lazy"
                  class="ssrcss-evoj7m-Image ee0ct7c0" /></picture></noscript></span></span
        ><span role="text" class="ssrcss-tvuve5-StyledFigureCopyright e34k3c20"
          ><span class="visually-hidden ssrcss-1f39n02-VisuallyHidden e1y6uwnp0"
            >Image source, </span
          >Reuters</span
        >
      </div>
      <figcaption class="ssrcss-1mget3o-StyledFigureCaption e34k3c22">
        <span class="visually-hidden ssrcss-1f39n02-VisuallyHidden e1y6uwnp0"
          >Image caption,
        </span>
        <div spacing="6" class="ssrcss-y7krbn-Stack e1y4nx260">
          Junior doctors took to picket lines in 2016 over pay and consitions
        </div>
      </figcaption>
    </figure>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        He also faced criticism over his handling of plans to introduce new
        contracts for junior doctors.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        The medics took part in a series of walk outs in 2016 - on two occasions,
        between 08:00 and 17:00, leaving emergency care uncovered - the first time
        that had ever happened in the history of the NHS. A new contract for
        junior doctors was later imposed.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        But Mr Hunt did go on to secure a funding increase for the NHS and also
        oversaw the introduction of an Ofsted-style system for rating hospitals
        and GP surgeries in England.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        During the 2016 EU referendum, Mr Hunt was a remain campaigner, but
        afterwards said he would support leave.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        His long-running appointment as health secretary ended when he became
        foreign secretary in July 2018. This was after his predecessor Mr Johnson
        quit over Theresa May's Brexit strategy.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        During his time as foreign secretary between 2018-19 Mr Hunt tried to free
        Nazanin Zaghari-Ratcliffe who had been held in Iran on spying charges,
        which she always denied.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        After her release, he accused the UK of "diplomatic failure" and said
        global co-operation was needed to "stamp out" states taking people
        hostage.
      </p>
    </div>
  </div>
  <div
    data-component="video-block"
    class="ssrcss-18mjolk-ComponentWrapper ep2nwvo1"
  >
    <figure class="ssrcss-wpgbih-StyledFigure e34k3c23">
      <div class="ssrcss-ab5fd8-StyledFigureContainer e34k3c21">
        <div
          data-chromatic="ignore"
          class="ssrcss-dtyrnv-MediaPlayerWrapper e1h75hkw3"
        >
          <div
            height="0"
            class="ssrcss-3qlsap-Container e1h75hkw2"
            id="bbcMediaPlayer0"
          >
            <div
              style="
                position: relative;
                z-index: 999;
                height: 100%;
                width: 100%;
                padding-bottom: 56.25%;
              "
              id="smphtml5iframebbcMediaPlayer0wrp"
            >
              <iframe
                id="smphtml5iframebbcMediaPlayer0"
                name="smphtml5iframebbcMediaPlayer0"
                allow="autoplay"
                frameborder="0"
                scrolling="no"
                lang="en-GB"
                allowfullscreen=""
                allowtransparency=""
                style="
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                "
                src="//emp.bbc.com/emp/SMPj/2.46.6/iframe.html"
                title="'I'm backing Rishi Sunak' - Jeremy Hunt"
              ></iframe>
            </div>
          </div>
          <noscript
            ><div class="ssrcss-1nxdn42-ErrorMessage eitf6462">
              <div class="ssrcss-1b7cqa9-StyledInnerContainer eitf6461">
                <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
                  This video can not be played
                </p>
                <h2 class="ssrcss-q4zz1q-StyledHeading e1fj1fc10">
                  To play this video you need to enable JavaScript in your
                  browser.
                </h2>
              </div>
            </div></noscript
          >
        </div>
      </div>
      <figcaption class="ssrcss-1mget3o-StyledFigureCaption e34k3c22">
        <span class="visually-hidden ssrcss-1f39n02-VisuallyHidden e1y6uwnp0"
          >Media caption,
        </span>
        <div spacing="6" class="ssrcss-y7krbn-Stack e1y4nx260">
          <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
            Watch: 'I'm backing Rishi Sunak' - Jeremy Hunt
          </p>
        </div>
      </figcaption>
    </figure>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        In March 2019, he became the first Western foreign minister to visit Yemen
        since conflict there began.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        After losing to Mr Johnson in the 2019 leadership race, Mr Hunt said the
        campaign was "always going to be uphill" for him because he voted Remain
        in the 2016 EU referendum.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        He was elected to head a committee of MPs which scrutinises the
        performance of the NHS and government health policy in January 2020,
        saying he was "honoured".
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        In June this year, he
        <a
          href="https://www.bbc.co.uk/news/uk-england-surrey-61857712"
          class="ssrcss-k17ofw-InlineLink e1no5rhv0"
          >revealed he had had cancer</a
        >
        but had now recovered. He said at the time that "every member of his
        family" has had the disease and that he had "a minor one" himself.
      </p>
    </div>
  </div>
  <div
    data-component="text-block"
    class="ssrcss-11r1m41-RichTextComponentWrapper ep2nwvo0"
  >
    <div class="ssrcss-7uxr49-RichTextContainer e5tfeyi1">
      <p class="ssrcss-1q0x1qg-Paragraph eq5iqo00">
        Recently Mr Hunt made headlines appearing at an infected-blood inquiry
        where he called the scandal a "huge failing of democracy".
      </p>
    </div>
  </div>
  </div>`
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <div className='py-5 min-h-screen flex gap-8 px-main'>
        <div className='w-9/12' dangerouslySetInnerHTML={markup}>
          
        </div>
        <Other id={id}/>
    </div>
  )
}

export default Story