import styles from '../styles/Works.module.scss'
import Works_slider from './Works_slider'

export default function Works() {
  return (
    <section className={styles.works_section}>
      <div className={styles.works_title}>
        <h2 className={'title'}>
          Related<br></br>
          <span className={'margin-left-title gold'}>Works</span>
        </h2>
        <svg width="270" height="199" viewBox="0 0 270 199" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.6 144.2C0.6 144.8 0.800001 145.2 1.2 145.6C1.6 146 2.2 146 2.6 145.8C2.6 145.6 2.8 145.6 3 145.4C3.4 144.8 3.4 143.8 3.4 143.2C3.4 129.8 9.2 117.4 15.8 106C43.4 98.4 86 71.8 106.2 49.4C111.8 43.2 116 35.8 117.8 28.2C121.8 11 110.8 -1.14441e-05 94 -1.14441e-05C64.8 -1.14441e-05 18.4 19.6 11.8 53L11.2 56.6C11.2 57 11 57.6 11 58C11 59 11.4 59.6 12.2 59.6C13 59.6 13.6 59 13.8 58.2C14.2 56.4 14.2 54.8 14.6 53C21.2 23 65 2 91.2 2C107.2 2 119.2 10.2 115.2 27.8C114.6 30.2 113.8 32.6 113 34.8C104.4 58.2 41 95.6 18.2 103.2L17 103.6L17.8 102.4C26.4 89.6 35.6 77 45.6 64.8C48.8 60.8 52.4 56.4 55.6 52.4C56 52 56.4 51.2 56.4 50.6C56.2 50.6 56.2 50.4 56.2 50.4C56 50 55.2 50.2 54.6 50.6C54.2 50.8 53.4 51.4 53 51.8C48.8 56 45.4 61 41.8 65.4C31.6 77.8 21.8 90.4 14.2 103.8C13.2 104 11.2 104.2 9.6 104.4C9 104.4 8 104.6 7.4 104.8L6.8 105C6 105.2 5 106.2 5 107C5 107.2 5.2 107.4 5.4 107.4C5.6 107.8 6.4 107.8 7 107.6L8 107.4C8.6 107.2 9 107.4 9.6 107.2L12.8 106.6L12.2 107.6C6.8 116.8 0.6 133 0.6 144.2ZM56.7781 120.6C57.1781 121 57.7781 121.4 58.3781 121.2C59.1781 121 60.3781 120 61.3781 118.8L66.3781 112.2C69.9781 107.2 74.9781 101.2 80.9781 98.6C81.1781 103.8 83.9781 107.4 89.5781 107.4C93.9781 107.4 100.778 105.2 104.378 102.4L104.578 102.2C104.978 101.6 105.378 101 105.178 100.6C105.178 100.6 104.978 100.6 104.978 100.4C104.578 100.2 103.978 100.4 103.378 100.6L102.578 100.8L98.7781 102.6C95.7781 104 92.3781 105.2 89.7781 105.2C85.9781 105.2 84.5781 102.4 83.9781 99.8L83.1781 96.8C83.1781 96 82.7781 95.2 81.9781 95.2C81.5781 95.4 80.9781 95.6 80.5781 95.6C70.5781 95.6 66.1781 107 61.3781 115.6L60.3781 115.4C60.9781 113.6 63.1781 109.8 65.1781 106.2L68.3781 100.8C68.5781 100.4 68.9781 99.4 68.9781 99C68.9781 98.8 68.7781 98.6 68.5781 98.4C68.3781 98 67.5781 98.4 66.9781 98.6C65.5781 99 56.3781 115.2 56.3781 118.6V119.2C56.3781 119.8 56.5781 120.4 56.7781 120.6ZM101.041 121.6C105.241 121.6 110.241 116.8 112.441 112.8C114.241 109.6 115.441 105.6 116.641 102.4C118.641 103.2 121.641 103.4 124.241 103.4C126.241 103.4 133.641 102.4 134.041 100.2C134.041 99.8 133.841 99.4 133.441 99.2C132.841 98.8 131.841 99 131.041 99.2L129.441 99.6C127.841 100 125.841 100.4 124.241 100.4C122.041 100.4 119.441 99.8 117.441 98.8C117.841 97.6 118.041 95.4 118.041 93.8C118.041 92.2 117.441 91.4 116.241 91.4C114.441 91.4 111.441 93 111.041 94.4C110.441 96.6 113.041 99.4 114.641 100.8C113.041 107.2 109.641 115.2 102.841 119C99.8406 118.2 99.0406 115.6 99.6406 112.6C100.241 109.4 102.841 105.4 105.041 102.2L108.441 97C108.641 96.6 109.241 95.6 109.041 95.2C108.841 95 108.641 94.8 108.241 94.8C106.841 94.8 105.441 96.8 104.841 97.8L102.441 101.4C101.041 103.4 97.6406 110 97.4406 111.8C96.8406 115.8 96.6406 121.6 101.041 121.6ZM66.9937 198.2C78.5937 198.2 109.194 152.4 115.194 142C120.194 133.4 124.794 124.2 128.394 115.2C133.394 111.4 138.794 107.8 144.394 105.4L149.794 103.2C150.394 103 150.994 102.4 151.394 102C151.794 101.6 152.194 100.8 151.994 100.4C151.794 100.2 151.394 99.8 150.594 99.8C149.394 99.8 142.994 102.4 141.394 103.2C137.994 105 134.594 107.2 131.394 109.6L129.994 110.6L130.394 109C131.194 105.6 132.794 102.4 133.594 99C133.794 98 133.394 97.4 132.594 97.4C131.994 97.4 131.594 97.6 131.394 98C131.194 98.6 130.794 99.2 130.594 99.8L129.594 103.4C128.794 106.8 127.394 110.4 126.194 113.8C104.394 131.6 86.5937 154.4 70.1938 176.6C68.3937 179.2 64.3937 185.8 63.7937 188.4C62.9937 192 63.1937 198.2 66.9937 198.2ZM65.9937 193.8L66.1937 191.8C67.5937 185.6 72.3937 178 77.5937 170.6C82.7937 163.4 88.7937 156.4 92.5937 151.6C101.394 140.4 111.794 129.4 122.594 119.8L124.394 118.2L123.394 120.4C116.994 134.6 108.994 148.4 99.3937 161.2C95.7937 166.2 92.1938 171.4 88.1937 176.4C84.3937 181.2 80.1937 186 75.3937 190.2L71.7937 193.2C70.3937 194.4 68.5937 195.4 67.3937 195.4C66.3937 195.4 65.9937 194.6 65.9937 193.8ZM136.394 87.6C137.794 87.6 138.194 86 138.594 85C139.394 82.8 140.594 80.2 141.994 78C142.394 77.6 142.994 76.4 142.794 76.2C142.594 75.8 142.194 75.6 141.794 75.6C138.994 75.6 135.794 83.8 135.394 86.2C135.194 86.8 135.794 87.6 136.394 87.6ZM151.725 116.6C160.125 116.6 177.725 107.8 183.725 101.8C184.125 101.4 184.125 100.8 183.925 100.6C183.925 100.2 183.725 100.2 183.525 100C183.325 99.8 182.725 100 182.325 100C182.125 100 181.525 100.4 181.125 100.8L179.525 102.2C173.725 106.8 159.325 113.4 152.525 113.4C150.525 113.4 148.325 112.4 148.125 109.8C153.925 109.4 164.925 101 166.325 95.4C166.925 93 165.525 91.8 163.125 91.8C155.725 91.8 147.125 102 145.525 108.8C144.325 114 146.525 116.6 151.725 116.6ZM163.525 94.8C161.525 100 154.125 105.8 149.125 106.4L148.925 105.8C151.125 101.2 157.925 94.6 163.525 94.8ZM179.57 122.4C188.57 122.4 204.97 111.6 213.77 106.4L216.17 105C216.57 104.8 217.17 104.2 217.57 104L219.17 102.8C219.37 102.6 219.97 102.2 220.17 101.8C220.37 101.4 220.57 100.8 220.37 100.6C220.37 100.4 220.17 100.2 219.97 100C219.57 100 219.17 100 218.77 100.2C218.37 100.4 217.97 100.8 217.57 101L214.97 102.8C206.57 108.6 191.57 119 181.77 119C178.57 119 175.57 117.8 176.57 113.6C177.97 108 186.97 97.8 192.57 95.6L194.97 96.6C195.37 96.6 195.97 96.8 196.37 96.8C197.17 96.8 197.77 96.2 197.97 95.6C198.17 94.8 196.97 94 195.97 93.2C194.77 92.2 192.37 93 190.57 93.8C182.77 97.2 176.17 104.8 174.37 112.4C173.17 117.8 173.97 122.4 179.57 122.4ZM209.498 78.4C210.898 78.4 214.898 77.6 219.098 76.6C223.298 75.6 227.498 74.4 229.698 74.4H230.698L230.298 75.2C224.298 87.4 215.898 103 213.098 115.4C212.498 117.6 211.898 121.2 212.098 123.2C212.098 123.8 213.098 125.8 213.698 126.8C213.898 127 214.098 127.4 214.498 127.4C214.698 127.6 215.098 127.8 215.498 127.6C227.698 125.4 240.698 111.4 248.498 101C248.898 100.6 249.298 99.8 249.298 99.2C249.098 99.2 249.098 99 249.098 99C248.898 98.6 248.098 98.8 247.498 99.2C246.898 99.6 246.298 100 245.898 100.4L241.498 105.6C236.498 111.4 224.498 124 216.498 124.8C215.098 122 215.298 118 216.098 115C216.898 112 220.098 102.2 221.498 99.4C222.098 98.2 223.298 96.4 224.698 95L228.498 90.8C233.498 85.4 238.298 79.2 242.498 73L246.698 72.8C251.698 72.8 256.098 73.4 260.098 75.6L261.098 75.8C261.898 75.8 262.498 75.2 262.498 74.6C262.498 73.2 261.498 72.4 260.098 72L257.298 71.2C255.498 70.6 248.898 69.8 247.298 69.8L244.898 69.4C248.498 63.8 251.498 58 252.498 51.2C252.498 50.6 252.298 49.8 252.298 49.2V48.8C252.298 48.4 252.098 48 251.898 47.8C251.498 47.6 251.098 47.4 250.898 47.6C246.298 49.4 235.298 66.2 232.698 71C230.698 71.4 210.098 75.4 209.898 75.4C209.098 75.8 208.498 76.4 208.298 77C208.098 77.8 208.498 78.4 209.498 78.4ZM235.698 70.8L236.098 69.8C238.098 64.8 244.698 55.8 249.298 52.2L249.698 54.6C248.698 59 243.498 66.4 240.898 70L235.698 70.8ZM234.098 74L237.498 73.4H238.498L225.098 90.8L234.098 74ZM242.023 124.2C246.423 124.2 253.023 116.6 253.023 112.2V110.6C256.623 107.8 261.023 105.4 265.023 103.8L267.423 103C267.823 102.8 268.423 102.6 268.823 102.2V102C269.223 101.6 269.623 100.8 269.423 100.4C269.223 100.2 268.823 99.8 268.223 99.8C265.023 99.8 255.223 105.4 252.223 107.8L250.223 105.6L248.223 102.8C247.023 101.2 246.023 99 246.623 97C247.423 94.4 249.423 92.4 251.223 91.2L253.623 89.6L251.023 93.4C250.623 94 250.223 94.6 249.823 95.2V95.4C249.423 96.2 249.023 97 249.223 97.4C249.223 97.6 249.423 97.6 249.423 97.8C249.823 98 250.423 97.8 251.023 97.4C251.623 97 252.223 96.4 252.623 96L254.423 93.4C255.423 92 255.823 90.8 256.023 90C256.423 88.6 255.823 87.4 254.823 87C254.423 86.8 253.623 87 253.223 87.2L252.423 87.6C248.223 89.6 244.223 93.2 243.223 97.4C242.423 100.4 243.423 102.4 245.023 104L247.423 106.6L249.423 110L243.823 115.6C241.823 117.6 240.423 119.6 240.023 121.4C239.623 123.2 240.423 124.2 242.023 124.2ZM248.623 114L250.023 112.6L249.423 114.4C248.423 117.6 246.623 121.4 242.623 121.4C244.423 119 246.423 116.2 248.623 114Z" fill="#F5F5F5" />
        </svg>
      </div>

      <div className={styles.works_circle}>
        <div className={styles.works_circle__inner}>
          <h3>04</h3>
          <p>Number of total projects</p>
        </div>
      </div>

      <div className={styles.works_timeline}>
        <div className={styles.works_timeline__date}>
          <p>2022</p>
          <p>2019</p>
        </div>

        <div className={styles.works_timeline__line}>
          <div className={styles.works_timeline__line_inner}></div>
        </div>
      </div>

      <div className={'clearfix'}></div>

      <Works_slider />
    </section>
  )
}