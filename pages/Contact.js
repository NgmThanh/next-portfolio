import styles from '../styles/Contact.module.scss'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact_section}>
      <h2 className={'title ' + styles.contact_section__title}>
        <span className={'stroke'}>Let's&nbsp;</span>Work<br></br><span className={'gold margin-left-title'}>Together</span>
      </h2>

      <p className={styles.contact_section__description}>
        If you have a general or project enquiry, please drop me an <a className={'underline'} href={'#'}>email</a>.
      </p>

      <svg width="295" height="136" viewBox="0 0 295 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.2 135.6C39 135.6 65.6 115.8 80 100.6C80.4 100 81 99.4 80.8 98.8C80.8 98.6 80.6 98.4 80.6 98.4C80.4 98.2 79.8 98.4 79.4 98.4C79 98.6 78.8 98.8 78.4 99.2L76.4 101.6C74.6 104 72.2 106 70 107.8C57.2 118.2 35.8 133.4 20.2 133.4C3.8 133.4 4 117.2 7 104.2C13.2 77.6 37.4 42.4 59 22.2C70.2 11.6 81.8 4 96.4 4C103.2 4 105.8 11.8 104.6 17.6C100.4 38.2 68.4 74.4 45.6 74.4C44.2 74.4 43.4 74.6 43.2 75.8C43 76.4 43.6 77.2 44.2 77.2C47 77.2 52.4 75.4 55.4 74.4C76.2 67.4 101.4 39.8 107.2 17.8C110 6.8 105 0.599992 93.8 0.599992C81 0.599992 67.4 11 57.4 20.4C36.8 39.8 9.6 79.8 3.8 104.8C0.4 119.4 4 135.6 20.2 135.6ZM75.6188 120.6C79.8188 120.6 84.8188 115.8 87.0188 111.8C88.8188 108.6 90.0188 104.6 91.2188 101.4C93.2188 102.2 96.2188 102.4 98.8188 102.4C100.819 102.4 108.219 101.4 108.619 99.2C108.619 98.8 108.419 98.4 108.019 98.2C107.419 97.8 106.419 98 105.619 98.2L104.019 98.6C102.419 99 100.419 99.4 98.8188 99.4C96.6188 99.4 94.0188 98.8 92.0188 97.8C92.4188 96.6 92.6188 94.4 92.6188 92.8C92.6188 91.2 92.0188 90.4 90.8188 90.4C89.0188 90.4 86.0188 92 85.6188 93.4C85.0188 95.6 87.6188 98.4 89.2188 99.8C87.6188 106.2 84.2188 114.2 77.4188 118C74.4188 117.2 73.6188 114.6 74.2188 111.6C74.8188 108.4 77.4188 104.4 79.6188 101.2L83.0188 96C83.2188 95.6 83.8188 94.6 83.6188 94.2C83.4188 94 83.2188 93.8 82.8188 93.8C81.4188 93.8 80.0188 95.8 79.4188 96.8L77.0188 100.4C75.6188 102.4 72.2188 109 72.0188 110.8C71.4188 114.8 71.2188 120.6 75.6188 120.6ZM98.1719 116C98.3719 116.2 98.5719 116.2 99.1719 116.2C102.372 116.2 105.972 113.2 109.972 109.4C111.972 107.4 113.972 105.4 115.972 103.8C118.172 102.2 120.172 100.4 122.172 99.6C122.572 100.8 122.972 102.8 123.172 104.4C123.372 106 123.372 107.6 123.572 109.2C123.972 112 125.372 114.2 128.972 114.2C135.372 114.2 145.972 107.2 150.572 102L152.172 100C152.372 99.6 152.572 99.2 152.572 99C152.772 98.4 152.572 98 152.372 97.8C152.172 97.6 151.372 97.8 150.972 98C150.372 98.4 149.772 99 149.372 99.4C148.372 100.4 147.972 101.4 147.572 102C145.172 105.6 132.972 111 129.172 111C128.172 111 127.572 111 126.972 110.2C126.572 109.6 126.572 108.4 126.372 107L125.972 102.2C125.772 100.8 125.372 96.2 123.372 96.2C120.972 96.2 117.172 99.4 112.972 103.2C110.972 105 108.972 107 106.972 108.8C105.172 110.4 103.172 112 101.772 112.8L100.572 113.4L100.972 112.2C102.772 107 107.572 99.6 111.772 95.4C112.172 95 112.372 94.6 112.572 94.2C112.772 93.6 113.172 93.4 112.972 93C112.972 92.6 112.572 92.4 112.172 92.4C108.372 92.4 97.9719 109.4 97.9719 113.8V114.2C97.9719 114.8 97.7719 115.6 98.1719 116ZM140.913 77.4C142.313 77.4 146.313 76.6 150.513 75.6C154.713 74.6 158.913 73.4 161.113 73.4H162.113L161.713 74.2C155.713 86.4 147.313 102 144.513 114.4C143.913 116.6 143.313 120.2 143.513 122.2C143.513 122.8 144.513 124.8 145.113 125.8C145.313 126 145.513 126.4 145.913 126.4C146.113 126.6 146.513 126.8 146.912 126.6C159.113 124.4 172.113 110.4 179.913 100C180.313 99.6 180.713 98.8 180.713 98.2C180.513 98.2 180.513 98 180.513 98C180.313 97.6 179.513 97.8 178.913 98.2C178.313 98.6 177.713 99 177.313 99.4L172.913 104.6C167.913 110.4 155.913 123 147.913 123.8C146.513 121 146.713 117 147.513 114C148.313 111 151.513 101.2 152.913 98.4C153.512 97.2 154.713 95.4 156.113 94L159.913 89.8C164.913 84.4 169.712 78.2 173.913 72L178.113 71.8C183.113 71.8 187.513 72.4 191.513 74.6L192.513 74.8C193.313 74.8 193.913 74.2 193.913 73.6C193.913 72.2 192.913 71.4 191.513 71L188.713 70.2C186.913 69.6 180.313 68.8 178.713 68.8L176.313 68.4C179.913 62.8 182.913 57 183.913 50.2C183.913 49.6 183.713 48.8 183.713 48.2V47.8C183.713 47.4 183.513 47 183.313 46.8C182.913 46.6 182.513 46.4 182.313 46.6C177.713 48.4 166.712 65.2 164.113 70C162.113 70.4 141.513 74.4 141.313 74.4C140.513 74.8 139.912 75.4 139.712 76C139.512 76.8 139.912 77.4 140.913 77.4ZM167.113 69.8L167.513 68.8C169.513 63.8 176.113 54.8 180.713 51.2L181.113 53.6C180.113 58 174.913 65.4 172.313 69L167.113 69.8ZM165.513 73L168.913 72.4H169.913L156.513 89.8L165.513 73ZM172.438 113.4C174.438 113.4 176.838 111.8 179.438 109.8C181.838 107.8 184.238 105.6 186.038 104L187.638 102.6L184.838 110.4C184.638 111 184.238 111.6 184.238 112.2C184.238 115.8 186.238 118.6 190.038 118.6C197.438 118.6 208.238 109.6 213.238 103.2L215.038 100.8C215.238 100.4 215.438 100 215.438 99.6C215.438 99 215.438 98.6 215.238 98.4C215.038 98.2 214.238 98.4 213.838 98.6L213.638 98.8C213.238 99 212.638 99.4 212.238 100L210.638 102.4C207.638 107 196.438 116 190.638 116C187.238 116 186.838 113 187.438 110.4C188.038 107.8 189.638 105.2 190.238 102.4C190.638 101 190.638 99.4 189.638 98.8V98.2C189.638 97.6 189.438 97 189.038 96.8L188.638 96.6C188.438 96.2 188.038 96 187.638 96C187.238 96 186.838 96 186.438 96C179.638 96.4 172.038 102 170.438 109C169.838 111.2 170.238 113.4 172.438 113.4ZM173.038 108.6C174.038 103.8 182.038 98.8 186.438 98.8L183.438 103.2L180.438 106C178.438 108 175.838 109.6 173.238 110.6L173.038 108.6ZM211.18 121.4C220.18 121.4 236.58 110.6 245.38 105.4L247.78 104C248.18 103.8 248.78 103.2 249.18 103L250.78 101.8C250.98 101.6 251.58 101.2 251.78 100.8C251.98 100.4 252.18 99.8 251.98 99.6C251.98 99.4 251.78 99.2 251.58 99C251.18 99 250.78 99 250.38 99.2C249.98 99.4 249.58 99.8 249.18 100L246.58 101.8C238.18 107.6 223.18 118 213.38 118C210.18 118 207.18 116.8 208.18 112.6C209.58 107 218.58 96.8 224.18 94.6L226.58 95.6C226.98 95.6 227.58 95.8 227.98 95.8C228.78 95.8 229.38 95.2 229.58 94.6C229.78 93.8 228.58 93 227.58 92.2C226.38 91.2 223.98 92 222.18 92.8C214.38 96.2 207.78 103.8 205.98 111.4C204.78 116.8 205.58 121.4 211.18 121.4ZM241.108 77.4C242.508 77.4 246.508 76.6 250.708 75.6C254.908 74.6 259.108 73.4 261.308 73.4H262.308L261.908 74.2C255.908 86.4 247.508 102 244.708 114.4C244.108 116.6 243.508 120.2 243.708 122.2C243.708 122.8 244.708 124.8 245.308 125.8C245.508 126 245.708 126.4 246.108 126.4C246.308 126.6 246.708 126.8 247.108 126.6C259.308 124.4 272.308 110.4 280.108 100C280.508 99.6 280.908 98.8 280.908 98.2C280.708 98.2 280.708 98 280.708 98C280.508 97.6 279.708 97.8 279.108 98.2C278.508 98.6 277.908 99 277.508 99.4L273.108 104.6C268.108 110.4 256.108 123 248.108 123.8C246.708 121 246.908 117 247.708 114C248.508 111 251.708 101.2 253.108 98.4C253.708 97.2 254.908 95.4 256.308 94L260.108 89.8C265.108 84.4 269.908 78.2 274.108 72L278.308 71.8C283.308 71.8 287.708 72.4 291.708 74.6L292.708 74.8C293.508 74.8 294.108 74.2 294.108 73.6C294.108 72.2 293.108 71.4 291.708 71L288.908 70.2C287.108 69.6 280.508 68.8 278.908 68.8L276.508 68.4C280.108 62.8 283.108 57 284.108 50.2C284.108 49.6 283.908 48.8 283.908 48.2V47.8C283.908 47.4 283.708 47 283.508 46.8C283.108 46.6 282.708 46.4 282.508 46.6C277.908 48.4 266.908 65.2 264.308 70C262.308 70.4 241.708 74.4 241.508 74.4C240.708 74.8 240.108 75.4 239.908 76C239.708 76.8 240.108 77.4 241.108 77.4ZM267.308 69.8L267.708 68.8C269.708 63.8 276.308 54.8 280.908 51.2L281.308 53.6C280.308 58 275.108 65.4 272.508 69L267.308 69.8ZM265.708 73L269.108 72.4H270.108L256.708 89.8L265.708 73Z" fill="#FC262D" />
      </svg>
    </section>
  )
}