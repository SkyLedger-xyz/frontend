const ShinnyButton = ({ text }) =>
  <div className="shinny_button">
    <a href="/#">
      { text }
      <span className="shift"> ›</span>
    </a>
    <div className="mask"></div>
  </div>

export default ShinnyButton