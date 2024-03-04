import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/430896971_1147390656698077_8443111551971022485_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE7sfMQXqgjGiSaai8b19oPS74isZPhRzhLviKxk-FHOLag54e2-DeSRtUD6B9PQr86mShnUVc9EDrVmBuUlX3b&_nc_ohc=4rBEqu8ZVXUAX_7zHZy&_nc_ht=scontent.fbkk10-1.fna&cb_e2o_trans=t&oh=03_AdTPErUlunVZFxOAWmQF7M9GwUWZmtck3ts2pJlFGHS1tg&oe=660AB468" />
            <p>Project to strengthen and upgrade the basics (Basics) in Data Science</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/420574495_319505901124904_3858511075975101221_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFuMf92jQuXUDU-BiPs0NJ-2MY83-Kvn9PYxjzf4q-f0-A875gw3a4zSf-DW9_skwd1haA_57c70PIr7-hIpODj&_nc_ohc=DSZEuSG2bu8AX8CZjta&_nc_ht=scontent.fbkk10-1.fna&cb_e2o_trans=t&oh=03_AdSS7rbx7far2kmEgpmKdNsgo26Bv9noGiLIGxtVXgzu1w&oe=660AB5DD" />
            <p>Resposive Web Design</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/423455096_1226845494941983_1394389683484153461_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHM89IK60pR7dA5B6hRdJ3fUTYB2_LnIDxRNgHb8ucgPK1bdxSO7FUh6KXg0lDsmI62ihZIoQ3IascA7pxa9eGx&_nc_ohc=GusQdqWCZ5YAX-EVcDH&_nc_ht=scontent.fbkk10-1.fna&cb_e2o_trans=t&oh=03_AdS3yq2Z4Ej53yy9CQVHXWf6W2kSS0_rNwTIuAOrpgKr5w&oe=660A8F4D" />
            <p>Python for beginners</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/423455118_696454135899376_8727111946688049666_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHh27TkekZ06EWXiqJo_9pmVjKuc8_ljbdWMq5zz-WNt1F_EQZCkV2xP5hpTUoe43n_RBySMScQz5NKadRfl-51&_nc_ohc=tiVK1IRZp44AX9yv10X&_nc_ht=scontent.fbkk10-1.fna&cb_e2o_trans=t&oh=03_AdSZVdoG6vQTq49_oiC-7ktv5SmknH1twBnKPmLqk-Dxwg&oe=660AAFC8" />
            <p>Basic training in using the robot operating system (ROS) with TurtleBot 3</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent-bkk1-1.xx.fbcdn.net/v/t1.15752-9/423454952_300935142699393_5639590490320557211_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEjXfmVrolWGzytWYGhvdqfI0lyyogVzJMjSXLKiBXMk4h3gC08P784QJ0zI4Y4yaqpdj7YvaemX3sWyqqZhZnP&_nc_ohc=99rQcoq9IZoAX9Wmb7L&_nc_ht=scontent-bkk1-1.xx&cb_e2o_trans=t&oh=03_AdQZM3fvQ9y4lXHtpxzbnfFyvke7U3Ckgk3l0OfcYkuF-g&oe=660ABB7F" />
            <p>Explore careers and courses in the Oracle Academy Career Center</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/423454551_962436085446330_6712716510477655179_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHOsilI_q4RESefpdLSYE4ez52hRPqEtSfPnaFE-oS1Jx7urvZc70ZfXz3qpVG0LOlNlji-fA-ggZqbrU0ks2iy&_nc_ohc=ufGK9n7bI8MAX9OLzoY&_nc_ht=scontent.fbkk10-1.fna&cb_e2o_trans=t&oh=03_AdTDwwSTpP00smI--Gvia52Lc0SxjkreNoz-u4-W71sAjg&oe=660A894B" />
            <p>Training and competitions for creating no-code mobile applications</p>
        </div>
        
      </div>
    </div>
  )
}

export default Portfolio