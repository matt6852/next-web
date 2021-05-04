import React from "react";
import sectionTH from "../styles/SectionTH.module.scss";

const SectionTH = () => {
  return (
    <section id="section-1" className={sectionTH.section_th}>
      <article>
        <h2 className={sectionTH.section_th_title}>
          Характеристики территории
        </h2>
        <div className={sectionTH.section_th_center_flex}>
          <div>
            <article className={sectionTH.card}>
              <img
                src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div>
                <h4>Lorem, ipsum dolor.psum dolor.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  possimus.
                </p>
              </div>
            </article>
            <article className={sectionTH.card}>
              <img
                src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div>
                <h4>Lorem, ipsum dolor.psum dolor.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  possimus.
                </p>
              </div>
            </article>
            <article className={sectionTH.card}>
              <img
                src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div>
                <h4>Lorem, ipsum dolor.psum dolor.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  possimus.
                </p>
              </div>
            </article>
          </div>
          <div>
            <article className={sectionTH.card}>
              <img
                src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div>
                <h4>Lorem, ipsum dolor.psum dolor.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  possimus.
                </p>
              </div>
            </article>
            <article className={sectionTH.card}>
              <img
                src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div>
                <h4>Lorem, ipsum dolor.psum dolor.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  possimus.
                </p>
              </div>
            </article>
            <article className={sectionTH.card}>
              <img
                src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
              <div>
                <h4>Lorem, ipsum dolor.psum dolor.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  possimus.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className={sectionTH.section_th_center}>
          <div className={sectionTH.section_th_item}>
            <h2>Застройщик</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              iure omnis minima, doloremque vel molestias, deleniti, obcaecati
              ab exercitationem aliquam repudiandae aliquid? Possimus
              repellendus, similique amet ipsam facere commodi quisquam.
            </p>
          </div>
          <div className={sectionTH.section_th_item}>
            {" "}
            <img
              src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default SectionTH;
