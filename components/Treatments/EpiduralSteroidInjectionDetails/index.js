import React from "react";
import Link from "next/link";
const ServiceDetailsContent = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container p-5">
          <div className="services-details-img">
            <img
              src="/images/treatments/epidural-steroid-injection.jpg"
              alt="epidural steroid injection"
            />
            <h2>Epidural Steroid Injections for Pain Management</h2>
            <p>
              As a result of inflamed spinal nerves caused by spinal stenosis or
              disc herniation, epidural steroids may provide pain relief in the
              neck, arms, shoulders, back, and legs. Between the{" "}
              <Link href="/treatments/sympathetic-injections">spinal cord</Link>{" "}
              and its protective sac is an epidural space containing a medical
              solution. Pain may persist for several days or even years before
              relief. To be able to resume physical therapy and return to normal
              activities, it is essential to reduce pain.
            </p>
            <h2>What Happens Before Treatment?</h2>
            <li>
              Your doctor will review both your medical history and previous
              imaging studies in order to determine the most appropriate
              approach for the injections.
            </li>
            <li>Don't forget to ask questions during this meeting.</li>
            <li>
              Before undergoing ESI, patients who take blood thinning
              medications (Coumadin, Plavix, etc.) may be required to stop
              taking them for several days.
            </li>
            <li>
              If you are taking medications, you should discuss them with your
              doctors, including those who prescribed them and those who will
              administer them.
            </li>
            <li>
              A fluoroscopy X-ray is usually used in an outpatient center to
              perform the procedure. Prepare transportation for the day of the
              procedure to and from the injection center.
            </li>
            <blockquote>
              <i className="icofont-quote-left"></i>
              Please contact us online or call us at 469-562-4188 to learn more
              about how you can benefit from our Dallas epidural steroid
              injections treatments options.
            </blockquote>
            <h2>Procedure</h2>
            <p>
              The doctor will ask you to sign a consent form after examining you
              and explaining the risks and benefits of the procedure. Once you
              are on the X-ray table, you will be assisted to the position of
              lying on your stomach as comfortably as possible. A blood pressure
              monitor and a heart rate monitor will be installed.
            </p>
            <li>
              The procedure may include the placement of a catheter in your vein
              to make you more comfortable. By doing so, you will be able to
              receive fluids and medications through your veins.
            </li>
            <li>
              Cleanse the back or neck with antiseptic solutions and alcohol.
              Following an anesthetic injection, you'll get a sterile drape.
            </li>
            <li>
              During this process, you may experience stinging or burning
              sensations.
            </li>
            <li>
              It is possible to access the epidural space by advancing a small
              needle under the guidance of an X-ray. This procedure usually
              causes one to feel pressure as a result. Moreover, using a more
              local anesthetic may provide pain relief.
            </li>
            <li>
              An injection of the steroid mixture will follow the injection of
              the X-ray dye in the epidural space.
            </li>
            <li>
              After the injection, your skin will be washed and a bandaid will
              be applied. Then, the nurses and doctors will ask you if you have
              ever experienced an allergic reaction to X-ray dye or shellfish.
            </li>
            <li>
              A nurse will check your blood pressure for 10 to 20 minutes
              (usually) and offer you juice, soda, or Graham crackers in the
              recovery area.
            </li>
            <li>
              You will receive written and oral instructions regarding your
              discharge. After your doctor has approved your discharge, you may
              drive yourself home with the assistance of your driver.
            </li>
            <h2>Expected Outcomes</h2>
            <p>
              There are many patients who benefit from ESI in terms of pain
              relief. The patient may require one or two additional injections,
              usually at 1-4 week intervals, to achieve full pain relief. The
              pain relief may last for weeks or years. As a complement to
              physical therapy and/or an exercise program at home, injections
              can strengthen the back muscles. The purpose of this procedure is
              to prevent future episodes of pain.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
