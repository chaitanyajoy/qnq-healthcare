import React from "react";


// progress_data
const progress_data = [
  {
    id: 1,
    icon: "flaticon-approval",
    img: "/assets/img/shape/navtabs-01.png",
    title: "RND Cerfication",
    des: (
      <>
        Trusted third party<br /> process certification
      </>
    ),
  },
  {
    id: 2,
    icon: "flaticon-flask",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Medical Approval",
    des: (
      <>
        All the formulae are approved <br />
        and tested
      </>
    ),
  },
  {
    id: 3,
    icon: "flaticon-report",
    img: "",
    title: "QNQ Testified",
    des: (
      <>
        Tested and distributed <br />
        across the pharmacies
      </>
    ),
  },
];

// tab_content
const tab_content = [
  {
    id: 1,
    tab_id: "profile-tab-pane",
    aria_labelledby: "profile-tab",
    header: (
      <>
        The QnQ pharmacy is committed to providing our clients services in a happy manner.
      </>
    ),
    title: "Our Mission is Give You Always Best Results.",
    des_1: (
      <>
        The mission of QnQ Healthcare Pvt. Ltd. is to help those in need by offering the best quality assured generic medicines. We place a strong emphasis on affordability so that everyone, regardless of financial situation, can obtain the medicines they require. 
      </>
    ),
    des_2: (
      <>
        We make an effort to ensure that these drugs utilise the most modern technique for production and research. We pledge to give every one of our customers the greatest healthcare experience achievable.
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/tab/tab-thumb-03.jpg" },
      { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-04.jpg" },
    ],
  },
  {
    id: 2,
    tab_id: "contact-tab-pane",
    aria_labelledby: "contact-tab",
    header: (
      <>
        The QnQ pharmacy is committed to providing our clients services in a happy manner.
      </>
    ),
    title: "We are Trusted by over 18000+ of customers",
    des_1: (
      <>
        A crucial component of medical care is quality-assured treatment. It guarantees the efficacy and safety of drugs. Laboratory testing and analysis are examples of quality control procedures that aid in confirming the effectiveness of components and medicines. Systems for quality assurance are used to track and evaluate the manufacturing process so that clients may be certain the pharmaceuticals they receive are always of a high calibre.
      </>
    ),
    des_2: (
      <>
        We do additional drug quality testing (Active Pharmaceutical Ingredient assay & amount, disintegration, sterility, etc.) on all batches of medicines in a reputable NABL accredited third party drug testing facility.
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/tab/tab-thumb-01.jpg" },
      { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-02.jpg" },
    ],
  },
];
const NavTab = () => {
  return (
    <>
      <section className="nav-area tp-common-area pt-130 pb-80">
        <div className="container">
          <ul className="nav tp-nav-tavs mb-70" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
                tabIndex="-1"
              >
                Our Process
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                OUr Mission
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                OUr Value
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <span className="nav-info d-flex justify-content-center text-center mb-75">
              The QnQ pharmacy is committed to providing our clients services in a happy manner.
              </span>
              <div className="row">
                {progress_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="navtabs nav-primary p-relative text-center mb-40">
                      <div className="navtabs__icon mb-35">
                        <i className={item.icon}></i>
                      </div>
                      <div className="navtabs__content">
                        <h5 className="navtabs__title mb-25 mb-10">
                          {item.title}
                        </h5>
                        <p>{item.des}</p>
                      </div>
                      {item.img && (
                        <div className="navtabs__shape d-none d-lg-block">
                          <img src={item?.img} alt="shape" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {tab_content.map((item) => (
              <div
                key={item.id}
                className="tab-pane fade"
                id={`${item.tab_id}`}
                role="tabpanel"
                aria-labelledby={`${item.aria_labelledby}`}
              >
                <span className="nav-info d-flex justify-content-center text-center mb-75">
                  {item.header}
                </span>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 order-lg-2">
                    <div className="nabmission mb-30">
                      <div className="nabmission__content text-center ml-50 mr-50 pt-20">
                        <h4 className="nabmission__title mb-35">
                          {item.title}
                        </h4>
                        <p className="mb-35">{item.des_1}</p>
                        <p>{item.des_2}</p>
                      </div>
                    </div>
                  </div>

                  {item.images.map((img, i) => (
                    <div
                      key={i}
                      className={`col-xl-3 col-lg-3 col-md-6 ${img.order}`}
                    >
                      <div className="nabthumb mb-30">
                        <img src={img.img} alt="tab-thumb" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTab;
