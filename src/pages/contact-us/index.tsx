import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/contact.module.scss";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Testimonials from "@/component/testimonials";
import Accordion from "@/component/accordion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact Us - Get in Touch with Our Team | CabX</title>
        <meta
          name="description"
          content="Need assistance or have inquiries regarding our driver management, digital duty slips, or services? Reach out to us today, and one of our representatives will be happy to assist you"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
      </Head>

      <Navbar />

      <div className={`${styles.contact_top} container `}>
        <div className={styles.contactus}>
          <div className={styles.conta}>
            <div className={styles.us}>
              <h2>
                <span>Connect</span> with a Cabx
              </h2>
              <h3> to kickstart your campaign.</h3>
            </div>
            <div className={styles.call}>
              <Image src="/Group.png" alt="phone" height={28} width={28} />
              <div>
                <h4>Call 0129-417-6500</h4>
                <span>MON-FRI, 9:00AM-6:00PM</span>
              </div>
            </div>
            <div className={styles.contactimage}>
              <Image
                src="/Group426.png"
                alt="image"
                className={styles.contactimage_image}
                width={505}
                height={415}
              />
            </div>
          </div>
        </div>
        <div className={styles.reach}>
          <h2>
            Reach out to receive hands-on guidance from an expert<br></br> and
            get your first campaign up and running.
          </h2>
          <p>
            chedule your 1-to-1 call or chat within the first 30 days of signing
            up and a Cabx Expert will give you easy first steps to get started
            <br></br>
            on your campaign, at no-cost.
          </p>
        </div>
        <div className={styles.cards}>
          {callus.map((value, index) => {
            return (
              <>
                <div
                  className={`${styles.callus} ${
                    value.id === "secondCard" ? styles.secondCard : ""
                  } ${value.id === "thirdCard" ? styles.thirdCard : ""}`}
                  key={index}
                >
                  <Image
                    src={value.image}
                    alt="location"
                    height={76}
                    width={76}
                  />
                  <h2>{value.heading}</h2>
                  <p>{value.content}</p>
                  <span>{value.number}</span>
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.mainform}>
          <div className={styles.formside}>
            <h2>Let’s talk</h2>
            <span>Ask us anything or just say hi...</span>
          </div>
          <div className={styles.formbox}>
            <div className={styles.name}>
              <input
                type="text"
                placeholder="First Name"
                id=""
                name=""
                className={styles.inputbox}
              />

              <input
                type="text"
                placeholder="Last Name"
                id=""
                name=""
                className={styles.inputbox}
              />
            </div>
            <div className={styles.email}>
              <input
                type="text"
                placeholder="Email Address"
                id=""
                name=""
                className={styles.inputbox}
              />

              <input
                type="number"
                placeholder="Phone Number"
                id=""
                name=""
                className={styles.inputbox}
              />
            </div>
            <div className={styles.message}>
              <textarea
                placeholder="Message"
                className={styles.inputbox}
              ></textarea>
            </div>

            <div className={styles.button}>
              <button className={styles.button_one}>submit</button>
            </div>
          </div>
        </div>
        <div>
          <Accordion />
        </div>
        <Testimonials />
      </div>

      {<Footer />}
    </>
  );
}

const callus = [
  {
    id: "",
    image: "/Group333.png",
    heading: "Call Us",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever.",
    number: "5267-214-392",
  },
  {
    id: "secondCard",
    image: "/Group433.png",
    heading: "Visit us",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever.",
    number: "New Delhi.India-110096",
  },
  {
    id: "thirdCard",
    image: "/Group434.png",
    heading: "Live Chat",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever.",
    number: "Start Chat",
  },
];
