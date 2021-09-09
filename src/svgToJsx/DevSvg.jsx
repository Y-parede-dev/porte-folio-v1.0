import '../assets/scss/DevSvg.scss';
const DevSvg = () => {
  
  let balls = document.getElementsByClassName('Eye');

  document.onmousemove =(e)=>{
    let x = e.clientX * 100 / window.innerWidth + '%';
    let y = e.clientY * 100 / window.innerHeight + '%';
    try {
      for(let i=0;i<2;i++){
        balls[i].style.left=x;
        balls[i].style.top=y;
        balls[i].style.transform="translate(-"+x+",-"+y+")" // `translate(-"${x}",-"${y}")`
      }
      
    } catch (error) {
      
    }
 
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="264"
      height="280"
      viewBox="0 0 264 280"
    >
      <defs>
        <circle id="react-path-1" cx="120" cy="120" r="120"></circle>
        <path
          id="react-path-2"
          d="M12 160c0 66.274 53.726 120 120 120s120-53.726 120-120h12V0H0v160h12z"
        ></path>
        <path
          id="react-path-3"
          d="M124 144.611V163h4c39.765 0 72 32.235 72 72v9H0v-9c0-39.765 32.235-72 72-72h4v-18.389c-17.237-8.189-29.628-24.924-31.695-44.73C38.48 99.058 34 94.052 34 88V74c0-5.946 4.325-10.882 10-11.834V56c0-30.928 25.072-56 56-56s56 25.072 56 56v6.166c5.675.952 10 5.888 10 11.834v14c0 6.052-4.48 11.058-10.305 11.881-2.067 19.806-14.458 36.541-31.695 44.73z"
        ></path>
      </defs>
      <g
        id="Avataaar"
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
      >
        <g
          id="Avataaar/Circle"
          transform="translate(-825 -1100) translate(825 1100)"
        >
          <g
            id="Circle"
            fillRule="evenodd"
            strokeWidth="1"
            transform="translate(12 40)"
          >
            <mask id="react-mask-4" fill="#fff">
              <use xlinkHref="#react-path-1"></use>
            </mask>
            <use
              id="Circle-Background"
              fill="#E6E6E6"
              xlinkHref="#react-path-1"
            ></use>
            <g id="Color/Palette/Blue-01" fill="#fff" mask="url(#react-mask-4)">
              <path id="🖍Color" d="M0 0H240V240H0z"></path>
            </g>
          </g>
          <mask id="react-mask-5" fill="#fff">
            <use xlinkHref="#react-path-2"></use>
          </mask>
          <g fillRule="evenodd" strokeWidth="1" mask="url(#react-mask-5)">
            <g id="Body" transform="translate(32 36)">
              <mask id="react-mask-6" fill="#fff">
                <use xlinkHref="#react-path-3"></use>
              </mask>
              <use fill="#D0C6AC" xlinkHref="#react-path-3"></use>
              <g id="Skin/👶🏽-03-Brown" fill="#EDB98A" mask="url(#react-mask-6)">
                <style></style>
                <path id="Color" d="M0 0H264V280H0z"></path>
              </g>
              <path
                id="Neck-Shadow"
                fill="#000"
                fillOpacity="0.1"
                d="M156 79v23c0 30.928-25.072 56-56 56s-56-25.072-56-56V79v15c0 30.928 25.072 56 56 56s56-25.072 56-56V79z"
                mask="url(#react-mask-6)"
              ></path>
            </g>
            <g id="Clothing/Hoodie" transform="translate(0 170)">
              <defs>
                <path
                  id="react-path-639"
                  d="M108 13.07c-17.919 2.006-31.72 7.482-31.996 21.575C50.146 45.568 32 71.165 32 100.999V110h200v-9c0-29.835-18.146-55.432-44.004-66.355-.276-14.093-14.077-19.57-31.996-21.574V32c0 13.255-10.745 24-24 24s-24-10.745-24-24V13.07z"
                ></path>
              </defs>
              <mask id="react-mask-640" fill="#fff">
                <use xlinkHref="#react-path-639"></use>
              </mask>
              <use
                id="Hoodie"
                fill="#B7C1DB"
                fillRule="evenodd"
                xlinkHref="#react-path-639"
              ></use>
              <g
                id="Color/Palette/Gray-01"
                fill="#3C4F5C"
                fillRule="evenodd"
                mask="url(#react-mask-640)"
              >
                <path id="🖍Color" d="M0 0H264V110H0z"></path>
              </g>
              <path
                id="Straps"
                fill="#F4F4F4"
                fillRule="evenodd"
                d="M102 61.74V110h-7V58.15a64.54 64.54 0 007 3.59zm67-3.59V98.5a3.5 3.5 0 11-7 0V61.74a64.54 64.54 0 007-3.59z"
                mask="url(#react-mask-640)"
              ></path>
              <path
                id="Shadow"
                fill="#000"
                fillOpacity="0.16"
                fillRule="evenodd"
                d="M90.96 12.724C75.91 15.571 65.5 21.243 65.5 32.308 65.5 52.02 98.538 68 132 68s66.5-15.98 66.5-35.692c0-11.065-10.41-16.737-25.46-19.584 9.085 3.35 14.96 8.982 14.96 18.353C188 51.469 160.179 68 132 68S76 51.469 76 31.077c0-9.37 5.875-15.003 14.96-18.353z"
                mask="url(#react-mask-640)"
              ></path>
            </g>
            <g id="Face" fill="#000" transform="translate(76 82)">
              <g id="Mouth/Smile" transform="translate(2 52)">
                <defs>
                  <path
                    id="react-path-401"
                    d="M35.118 15.128C36.176 24.62 44.226 32 54 32c9.804 0 17.874-7.426 18.892-16.96.082-.767-.775-2.04-1.85-2.04H37.088c-1.08 0-2.075 1.178-1.97 2.128z"
                  ></path>
                </defs>
                <mask id="react-mask-402" fill="#fff">
                  <use xlinkHref="#react-path-401"></use>
                </mask>
                <use
                  id="Mouth"
                  fill="#000"
                  fillOpacity="0.7"
                  fillRule="evenodd"
                  xlinkHref="#react-path-401"
                ></use>
                <rect
                  id="Teeth"
                  width="31"
                  height="16"
                  x="39"
                  y="2"
                  fill="#FFF"
                  fillRule="evenodd"
                  mask="url(#react-mask-402)"
                  rx="5"
                ></rect>
                <g
                  id="Tongue"
                  fill="#FF4F6D"
                  fillRule="evenodd"
                  strokeWidth="1"
                  mask="url(#react-mask-402)"
                >
                  <g transform="translate(38 24)">
                    <circle cx="11" cy="11" r="11"></circle>
                    <circle cx="21" cy="11" r="11"></circle>
                  </g>
                </g>
              </g>
              <g
                id="Nose/Default"
                fillOpacity="0.16"
                transform="translate(28 40)"
              >
                <path
                  id="Nose"
                  d="M16 8c0 4.418 5.373 8 12 8s12-3.582 12-8"
                ></path>
              </g>
              <g id="Eyes/Eye-Roll-🙄">
                
                <g id="EyeLeft"
                  transform-origin='center'>
                    <foreignObject>
                      <div className="fO">

                        <div className="eye-content">
                          <div className="Eye">
                          </div>
                        </div>
                      </div>

                    </foreignObject>
                </g>
                

                <g id="eyeRight" transform-origin='center'>

                <foreignObject>
                  <div className="fO-2">

                      <div className="eye-content">
                        <div className="Eye">
                        </div>
                      </div>
                  </div>

                    </foreignObject>
                </g>
              </g>
              <g id="Eyebrow/Outline/Raised-Excited" fillOpacity="0.6">
                <g id="I-Browse" fillRule="nonzero"  transform="translate(12)">
                  <path
                    id="Eyebrow"
                    d="M3.976 17.128C5.47 7.605 18.059 1.108 27.164 5.3a2 2 0 001.672-3.633C17.35-3.622 1.936 4.332.024 16.508a2 2 0 103.952.62z"
                  ></path>
                  <path
                    id="Eyebrow"
                    d="M61.976 17.128C63.47 7.605 76.059 1.108 85.164 5.3a2 2 0 001.672-3.633c-11.487-5.29-26.9 2.664-28.812 14.84a2 2 0 003.952.62z"
                    transform="matrix(-1 0 0 1 146 0)"
                  ></path>
                </g>
              </g>
            </g>
            <g id="Top" fillRule="evenodd" strokeWidth="1">
              <defs>
                <path id="react-path-619" d="M0 0H264V280H0z"></path>
                <path
                  id="react-path-618"
                  d="M180.15 39.92c-2.76-2.82-5.964-5.213-9.08-7.613-.688-.53-1.387-1.046-2.06-1.595-.152-.125-1.718-1.246-1.905-1.659-.451-.993-.19-.22-.128-1.404.079-1.498 3.134-5.73.854-6.7-1.003-.427-2.791.709-3.753 1.084a59.489 59.489 0 01-5.731 1.9c.932-1.857 2.708-5.574-.631-4.579-2.602.775-5.026 2.768-7.64 3.705.865-1.417 4.324-5.811 1.198-6.057-.972-.076-3.803 1.748-4.85 2.138-3.137 1.165-6.34 1.92-9.634 2.513-11.198 2.018-24.293 1.442-34.653 6.54-7.988 3.93-15.874 10.029-20.489 17.795-4.447 7.485-6.11 15.676-7.041 24.253-.683 6.295-.739 12.802-.42 19.119.105 2.07.338 11.61 3.345 8.721 1.498-1.44 1.487-7.253 1.864-9.22.751-3.916 1.474-7.848 2.726-11.638 2.206-6.68 4.809-13.793 10.305-18.393 3.527-2.952 6.004-6.941 9.379-9.919 1.516-1.337.36-1.198 2.797-1.022 1.638.117 3.282.162 4.923.205 3.796.099 7.598.074 11.395.087 7.647.028 15.258.136 22.898-.265 3.395-.177 6.799-.274 10.185-.588 1.891-.175 5.247-1.387 6.804-.461 1.425.847 2.905 3.615 3.928 4.748 2.418 2.679 5.3 4.724 8.126 6.92 5.895 4.58 8.87 10.332 10.66 17.488 1.784 7.13 1.284 13.745 3.491 20.762.389 1.233 1.416 3.36 2.682 1.454.235-.354.175-2.3.175-3.42 0-4.52 1.144-7.91 1.13-12.46-.056-13.832-.504-31.868-10.85-42.439z"
                ></path>
                <filter
                  id="react-filter-615"
                  width="101.5%"
                  height="108%"
                  x="-.8%"
                  y="-2%"
                  filterUnits="objectBoundingBox"
                >
                  <feOffset
                    dy="2"
                    in="SourceAlpha"
                    result="shadowOffsetOuter1"
                  ></feOffset>
                  <feColorMatrix
                    in="shadowOffsetOuter1"
                    result="shadowMatrixOuter1"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                  ></feColorMatrix>
                  <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
              <mask id="react-mask-617" fill="#fff">
                <use xlinkHref="#react-path-619"></use>
              </mask>
              <g id="Top/Short-Hair/Short-Flat" mask="url(#react-mask-617)">
                <g transform="translate(-1)">
                  <g id="Facial-Hair/Beard-Medium" transform="translate(49 72)">
                    <defs>
                      <path
                        id="react-path-621"
                        d="M105.018 94.13c-3.868 5.591-6.76 1.817-10.88-1.254-2.481-1.849-6.177-4.148-9.634-4.035-3.456-.113-7.152 2.186-9.633 4.035-4.12 3.07-7.013 6.845-10.88 1.254-2.903-4.198-1.688-11.256 1.024-15.227 3.859-5.652 9.094-2.918 14.947-3.563 1.592-.175 3.19-.617 4.542-1.34 1.352.723 2.95 1.165 4.542 1.34 5.854.645 11.089-2.089 14.948 3.563 2.712 3.97 3.926 11.03 1.024 15.227M140.39 26c-3.424 14.075-4.998 28.434-7.481 42.671a319.166 319.166 0 01-1.685 8.879c-.127.62-.251 2.923-.862 3.214-1.851.884-5.624-3.817-6.633-4.879-2.533-2.666-5.045-5.356-8.13-7.448-6.235-4.227-13.535-6.726-21.13-7.32-3.178-.248-7.475.186-10.47 1.993-2.995-1.807-7.292-2.24-10.47-1.992-7.596.593-14.895 3.092-21.13 7.32-3.085 2.091-5.597 4.781-8.13 7.447-1.01 1.062-4.782 5.763-6.633 4.88-.61-.292-.735-2.595-.862-3.215a319.164 319.164 0 01-1.685-8.879C32.607 54.434 31.034 40.075 27.61 26c-.997 0-1.871 18.748-1.983 20.495-.452 7.094-.98 14.03-.305 21.131 1.164 12.249 2.377 27.608 11.71 36.962 8.434 8.451 20.678 10.218 31.24 15.553 1.36.687 3.163 1.535 5.108 2.23 2.049 1.563 6.113 2.629 10.794 2.629 4.91 0 9.142-1.173 11.08-2.862a47.143 47.143 0 004.475-1.997c10.56-5.336 22.805-7.102 31.238-15.553 9.334-9.354 10.547-24.713 11.712-36.962.674-7.1.146-14.037-.306-21.131C142.26 44.748 141.387 26 140.39 26z"
                      ></path>
                    </defs>
                    <mask id="react-mask-620" fill="#fff">
                      <use xlinkHref="#react-path-621"></use>
                    </mask>
                    <use
                      id="Beardness"
                      fill="#252E32"
                      fillRule="evenodd"
                      xlinkHref="#react-path-621"
                    ></use>
                    <g
                      id="Color/Hair/Brown"
                      fill="#4A312C"
                      mask="url(#react-mask-620)"
                    >
                      <path
                        id="Color"
                        d="M0 0H264V244H0z"
                        transform="translate(-32)"
                      ></path>
                    </g>
                  </g>
                  <mask id="react-mask-616" fill="#fff">
                    <use xlinkHref="#react-path-618"></use>
                  </mask>
                  <use
                    id="Short-Hair"
                    fill="#1F3140"
                    fillRule="evenodd"
                    stroke="none"
                    xlinkHref="#react-path-618"
                  ></use>
                  <g
                    id="Skin/👶🏽-03-Brown"
                    fill="#4A312C"
                    mask="url(#react-mask-616)"
                  >
                    <path id="Color" d="M0 0H264V280H0z"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default DevSvg;
