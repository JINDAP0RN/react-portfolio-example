import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            He provides excellent after-sales service. He is always happy to help us whenever we have any questions or problems.
          </p>
          <img
            src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/289869392_522550619607728_4793040749999761425_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGfE2WsEEzUW85cMvBXyMREcMhvmmQaTbJwyG-aZBpNssUXqLWRK7RMHa0LSLWI9PbkX9fcefwzZ-YVcYu0OYlW&_nc_ohc=Y2zXv7XptCYAX-CZ-3H&_nc_ht=scontent.fbkk14-1.fna&cb_e2o_trans=t&oh=00_AfDyiFHIEtHzdhQtycgIbeXWX7hj0zPze1bF7JG-Huxepw&oe=65E909ED"
            alt=""
          />
          <h4>Mango</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            He is a reliable and trustworthy Web Developer. I highly recommend him to anyone who needs a website developed.
          </p>
          <img
            src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/427128457_1115188059455916_9201721153059792803_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGDxlqg8S6fd2eBebn7Xqb08M2DHHDLUL7wzYMccMtQvsBZkkp2mo9XVLR7boFOlGUhkc_PQC2mZd4lw8vggpVt&_nc_ohc=1ozyvJDVtGkAX-SaAG0&_nc_ht=scontent.fbkk10-1.fna&cb_e2o_trans=t&oh=00_AfBn3FneCbDQNCdNtl_46Xl_rMUImFgVZiF_r2Mo4YAiLw&oe=65E997D4"
            alt=""
          />
          <h4>James</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            He works professionally with our team. He can understand out needs. and can deelop a website that perfectly meets our needs.
          </p>
          <img
            src="https://scontent-bkk1-1.xx.fbcdn.net/v/t1.15752-9/423619269_776622860555822_6429911238774140443_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGcNd1txdkEtKa7Rx2YOvadH_rBlMYugeof-sGUxi6B6lZBf85CEzpVVnximR_7AE5Se9MK4IT-jbKbhT2jgQz8&_nc_ohc=1inpVCthqGMAX8uJeYA&_nc_ht=scontent-bkk1-1.xx&cb_e2o_trans=t&oh=03_AdTPQmq3C4Qpx11MhP5o1wHtn5rH_-O0Fk8n3BWDyDjOuQ&oe=660BF1D0"
            alt=""
          />
          <h4>Watermelon</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;