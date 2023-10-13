import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faLeaf } from '@fortawesome/free-solid-svg-icons';

const HEAD = (
  <div className="body-head">
    <FontAwesomeIcon icon={faRobot} className="head-icon" />
  </div>
)

const BODY = (
  <div className="robot body-middle"
  > AI </div>
)

const RIGHT_ARM = (
  <div className="robot body-right-arm limb"
  />
)

const LEFT_ARM = (
  <div className="robot body-left-arm limb"
  />
)

const RIGHT_LEG = (
  <div className="robot body-right-leg limb"
  />
)

const LEFT_LEG = (
  <div className="robot body-left-leg limb" />
)
const LEAF = (
  <div className="body-leaf">
  <FontAwesomeIcon icon={faLeaf} />
  </div>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG, LEAF]



function Gameboard({ numberOfGuesses }) {
  console.log(numberOfGuesses)
  return (
    <div className="gameboard-box">
      <div className="game-pieces-container">
      <div className="hook piece"></div>
      <div className="body-render piece"> 
        {BODY_PARTS.slice(0, numberOfGuesses)}
       
      </div>
      <div className="arm piece"></div>
      <div className="stand piece"></div>
      <div className="base piece"></div>
      </div>
    </div>
  )
}

export default Gameboard
