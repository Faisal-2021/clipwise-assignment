import styles from "./styles.module.css";
// customWB
export default function BottomWave() {
  return (
    <svg
    className={styles.customWB}
      width="1440"
      height="900"
      viewBox="0 0 1440 900"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M780.5 719.289C996.132 691.392 1205.06 380.14 1440 254.604V-6.10352e-05H0V900C0 900 124.358 896.153 250 817.997C395.056 727.764 564.868 747.186 780.5 719.289Z"
        fill="white"
      />
    </svg>

    //     <div className={styles.customWB}>
    //     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    //         <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" class="shape-fill"></path>
    //     </svg>
    // </div>

    // <div className={styles.customBottom}>
    //   <svg
    //     data-name="Layer 1"
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 1200 120"
    //     preserveAspectRatio="none"
    //     className=" fill-white"
    //   >
    //     <path
    //       d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
    //       className="shape-fill"
    //     ></path>
    //   </svg>
    // </div>
  );
}
