import PropTypes from 'prop-types'
import React from 'react'
import ichiji from '../images/ichiji_edit.jpg'
import zentai from '../images/zentai.jpg'
import kiito_senzai from '../images/kiito_senzai_edit.jpg'
import access from '../images/access.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="concept"
          className={`${this.props.article === 'concept' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CONCEPT</h2>
            <div class="youtube">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/TMVrcz3AG7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
            </div>
          <p>テクノロジーの力で、次世代の合唱の形を提案する演奏会を開催します。</p>
          <p>Live配信やデジタルアートと合唱の融合など、新しい演奏会のスタイルで挑戦します。</p>
          <p>ステージ情報は <a href="javascript:;" onClick={async () => {
            await this.props.onCloseArticle();
            this.props.onOpenArticle('stage');
            }}>こちら</a> から
          </p>
          {close}
        </article>

        <article
          id="stage"
          className={`${this.props.article === 'stage' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Stage</h2>
          <span className="image-main main">
            <img src={zentai} alt="" />
          </span>
          <h3>1st Session: Contest Selection</h3>
          <p>全日本合唱コンクール・東京国際合唱コンクール・声楽アンサンブルコンテスト…etc　
            私たちの軌跡をなぞるように今までコンクールで演奏した曲目を厳選して演奏します
            Pseudo-Yoik NT(J. Mantyjarvi), Ave Maria(F. Biebl), Laudate Dominum(L. Gyongyosi) ほか
          </p>
          <span className="image-main main">
            <img src={ichiji} alt="" />
          </span>
          <h3>2nd Session: Co-Creation</h3>
          <p>Cooperate with ゆげ焙煎所、ICHIJI、and Special Guests!!!
            私たちの活動をより深く知って頂くための団員と観客のみなさんとのコミュニケーションセッションです。
            西宮の珈琲店のゆげ焙煎所さんと芦屋のチョコレート屋さんのICHIJIさんにもご協力頂来ました！
            全国各地からあの合唱団からこの人まで!??なゲストもお迎えしますよ♪アトリウム演奏もあるかも？！
            それが“無料”で聞けちゃうんです！乞うご期待！
          </p>
          <span className="image-main main">
            <img src={kiito_senzai} alt="" />
          </span>
          <h3>3rd Session: Chorus × NewMusic</h3>
          <p>デジタルアート×合唱、ポップミュージック×合唱…。
            電子楽器やデジタルアートなどと合唱のコラボレーションセッションです。
            今までにない「合唱の新しい形」創り上げます。様々な演出を取り入れた演奏となります。今まで経験したことのない合唱の“Next”へ導きます。</p>
          <p>※入場時間…2nd session中入場自由
          </p>
          {close}
        </article>

        <article
          id="access"
          className={`${this.props.article === 'access' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Access</h2>
          <span className="image-main main">
            <img src={access} alt="" />
          </span>
          {close}
        </article>

        <article
          id="ticket"
          className={`${this.props.article === 'ticket' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Buy Ticket</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
