<template lang="pug">
  footer.TheFooter.footer
    BaseImage.star(
      :src="require('images/star.svg')",
      alt="star",
      force,
    )
    BaseImage.chest(
      :src="require('images/chest.svg')",
      alt="chest",
      force,
    )
    template(v-if="currentRouteName != 'product' && currentRouteName != 'brand'")
      BaseImage.right-footer-rock(
        :src="require('images/top-left-footer-rock.svg')",
        alt="right-footer-rock",
        force,
      )
    .footer-content
      .footer-content-row
        .footer-content-row__contacts.column
          h5 Contacts
          a(href="mailto:info@unfederalreserve.com") info@unfederalreserve.com
          a(href="mailto:askhoward@unfederalreserve.com") Submit Town hall Questions
          SocialLinks
        .footer-content-row__documents.column
          h5 Documents
          a(
            :href="require('docs/Residual_Token_Whitepaper_091520_CONFIDE.pdf')",
            target="_blank",
          ) White paper
          a(
            :href="require('docs/LitePaperRSDL.pdf')",
            target="_blank",
          ) Lite paper
          router-link(:to="{name: 'terms'}") Terms
          router-link(:to="{name: 'privacy'}") Privacy
          router-link(:to="{name: 'brand'}") Brand Assets
        .footer-content-row__home.column
          h5 Home
          router-link(:to="{name: 'home', hash: '#how-it-works'}") How it works
          router-link(:to="{name: 'home', hash: '#about'}") About us
          a(
            href="https://unfederalreserve.medium.com/",
            target="_blank",
          ) Blog
      .footer-content-row.last-row
        .footer-content-row__leaders
          h5 Leadership
          router-link(:to="{name: 'team'}") Meet the team
        .footer-content-row__more
          h5 More
          a(
            href="https://v2.info.uniswap.org/token/0x5218e472cfcfe0b64a064f055b43b4cdc9efd3a6",
            target="_blank",
          ) Buy on Uniswap
          br
          a(
            href="https://trade.kucoin.com/ERSDL-USDT",
            target="_blank",
          ) Buy on KuCoin
      .all-rights
        p.mb-0 All rights reserved ©2021
</template>

<script>
import BaseImage from 'Components/Base//BaseImage';
import SocialLinks from 'Components/SocialLinks/SocialLinks';

export default {
  name: 'TheFooter',
  components: { BaseImage, SocialLinks },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.footer
  width: 100%
  position: relative
  bottom: -1px
  z-index: 2
  @media screen and (min-width: 695px)
    height: 590px
  @media screen and (min-width: 1800px)
    height: 570px
  @media screen and (max-width: 695px)
    height: 100%
    padding-top: 130px
  &-content
    width: 100%
    height: 100%
    max-width: 960px
    padding-left: 15px
    padding-right: 15px
    margin: 0 auto
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-end
    padding-bottom: 20px
    @media screen and (max-width: 1170px)
      max-width: 100%
      align-items: center
    &:before
      content: ''
      position: absolute
      left: 0
      top: 0
      z-index: 1
      background-image: url('~images/footer-bg.svg')
      background-repeat: no-repeat
      background-position: bottom left
      background-size: cover
      width: 100%
      height: 100%
    &-row
      display: flex
      flex-direction: row
      width: 100%
      position: relative
      z-index: 3
      @media screen and (max-width: 767px)
        justify-content: space-between
      @media screen and (max-width: 695px)
        flex-wrap: wrap
        justify-content: center
        align-items: flex-start
      &.last-row
        margin-top: 65px
        justify-content: flex-start
        @media screen and (max-width: 767px)
          margin-top: 30px
        @media screen and (max-width: 695px)
          justify-content: center
      &__contacts
        width: 100%
        max-width: 290px
        margin-right: 50px
        @media screen and (max-width: 767px)
          margin-right: 30px
        @media screen and (max-width: 695px)
          max-width: 100%
          margin-right: 0
          margin-bottom: 30px
        ::v-deep .social-links
          margin-top: 20px
          margin-left: -12px
      &__documents
        width: 100%
        max-width: 180px
        margin-right: 50px
        @media screen and (max-width: 767px)
          margin-right: 30px
        @media screen and (max-width: 695px)
          margin-right: 0
          max-width: 50%
      &__home
        width: 100%
        max-width: 125px
        @media screen and (max-width: 695px)
          max-width: 50%
      &__leaders
        width: 100%
        max-width: 135px
        margin-right: 50px
        @media screen and (max-width: 767px)
          margin-right: 30px
        @media screen and (max-width: 695px)
          max-width: 50%
          margin-right: 0
      &__more
        width: 100%
        max-width: 180px
        @media screen and (max-width: 767px)
          margin-right: 30px
        @media screen and (max-width: 695px)
          max-width: 50%
          margin-right: 0
      &__btn
        @media screen and (max-width: 695px)
          width: 100%
          text-align: center
          margin-top: 30px
        @media screen and (max-width: 360px)
          .v-btn
            font-size: 16px !important
    h5
      color: $white
      margin-bottom: 18px
    .column
      display: flex
      flex-direction: column
      @media screen and (max-width: 695px)
        // align-items: center
      a
        margin-bottom: 10px
        &:last-child
          margin-bottom: 0
    .all-rights
      width: 100%
      margin-top: 25px
      position: relative
      z-index: 2
      p
        opacity: 0.5
        color: $white
        text-align: left
  .right-footer-rock
    position: absolute
    left: 0
    top: -250px
    max-width: 300px
    z-index: 1
    @media screen and (max-width: 767px)
      display: none
  .star
    position: absolute
    right: 20px
    top: 50px
    z-index: 2
  .chest
    position: absolute
    right: 13%
    top: 30px
    max-width: 320px
    z-index: 2
    @media screen and (max-width: 1170px)
      max-width: 270px
    @media screen and (max-width: 991px)
      display: none
</style>
