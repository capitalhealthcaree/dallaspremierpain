import React from "react";
import Link from "next/link";
const ServiceDetailsContent = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="services-details-img">
            <img
              src="/images/treatments/si-joint-injections-treatment.jpg"
              alt="Knee Pain"
            />

            <h2>SI Joint Injections</h2>
            <p>
              A sacroiliac joint connects the spine to the pelvis at its base.
              Inflammation of the SI joint is often responsible for{" "}
              <Link href="/conditions-we-treat/back-pain">lower back pain</Link>
              . Other symptoms of the condition may include{" "}
              <Link href="/conditions-we-treat/leg-pain">leg pain</Link>,
              buttock pain, and groin pain. If your doctor determines that SI
              joint dysfunction is causing your pain, then an appropriate
              treatment plan can be initiated. This is before starting any
              generalized pain treatment.
            </p>
            <p>
              SI joint injections are effective in diagnosing and treating SI
              joint dysfunction. You should consider this treatment if you
              suffer from lower back pain.
            </p>
            <blockquote>
              <i className="icofont-quote-left"></i>
              Please contact us online or call us at 469-562-4188 to learn more
              about how you can benefit from our dallas knee pain treatments
              options.
            </blockquote>
            <h2>Preparations Prior to a Procedure</h2>
            <p>
              Information regarding your past health will be required by your
              healthcare provider. Please inform him or her if you have recently
              been ill or are suffering from an infection. Precautions should be
              taken by diabetics and those taking blood-thinning medications.
            </p>
            <p>
              Additionally, your healthcare provider should be informed of all
              medications you are taking. Some medications may need to be
              discontinued several days prior to the injection. Inform your
              healthcare provider if you suffer from any of the following
              conditions:
            </p>
            <li>Are you allergic to anything?</li>
            <li>
              Has any medication, injection, or contrast dye caused you problems
              in the past?
            </li>
            <p>
              The night before the procedure, your healthcare provider may
              instruct you not to eat or drink after midnight. The injection may
              be accompanied by the administration of a relaxing medication. If
              you are unable to drive yourself home after the procedure, you
              should arrange for someone to drive you home. The preparation
              instructions you receive from your provider may be accompanied by
              other instructions.
            </p>
            <h2>Procedure</h2>
            <p>
              The procedure may be different for you. Sacroiliac joint injection
              generally involves the following steps:
            </p>
            <li>A face-down X-ray table will be used to examine you.</li>
            <li>
              If you require assistance with relaxation, sedation may be
              administered to you.
            </li>
            <li>
              An injection site is numb by medicine administered by healthcare
              providers. During the procedure, there may be some discomfort and
              stinging. It should only take a few seconds for this process to
              complete.
            </li>
            <li>
              A needle tip is inserted into the sacroiliac joint by the
              provider. An X-ray will guide the needle during the procedure. In
              the course of the procedure, this area may become painful.
            </li>
            <li>
              X-ray contrast dye is injected using an injection needle.The
              needle tip will be confirmed within the joint by doing so.
            </li>
            <li>
              The provider administers the medicine by injecting it into the
              joint. This medicine may contain a local anesthetic to reduce
              pain. An anti-inflammatory steroid may also be prescribed as part
              of the <Link href="/treatments">treatments</Link>.
            </li>
            <li>
              A stinging or burning sensation may also occur as a result of the
              injection. As a general rule, this sensation will last for only a
              short period of time.
            </li>
            <li>The needle will be removed and a bandage will be applied.</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
