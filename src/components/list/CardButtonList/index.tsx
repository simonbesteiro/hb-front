//Card that displays a resume of the button info in tthe List component. Its fieldds can be customizedd according to buttonTemplate.
import ImageWrapper, { ImageType } from 'elements/ImageWrapper'
import CrossIcon from '../../../../public/assets/svg/icons/cross1'
import { Link } from 'elements/Link';

export default function CardButtonList() {
  return (
    <>

          <div className="card-button-list card-button-list--need">


            <div className="card-button-list__picture-container">

              <div className="card-button-list__nav">

                <div className="arrow btn-circle__icon">
                  <CrossIcon />
                </div>
                <div className="arrow btn-circle__icon">
                  <CrossIcon />
                </div>

              </div>
              <ImageWrapper imageType={ImageType.cardList} src="https://dummyimage.com/200/#ccc/fff" alt="popup_img"/>
            </div>


            <div className="card-button-list__content">

              <Link href="/ButtonFile">

                  <div className="card-button-list__header">

                    <div className="card-button-list__info">

                      <div className="card-button-list__status card-button-list__status">

                        <span className="card-button-list__status--offer">button type</span> y <span className="card-button-list__status--need">button type</span>

                      </div>

                      <div className="card-button-list__status card-button-list__status">

                        <span className="card-button-list__title">Button Name</span>

                      </div>

                    </div>

                    <div className="card-button-list__submenu card-button-list__trigger">
                    </div>

                  </div>

                  <div className="card-button-list__hashtags">

                        <div className="card-button-list__need">
                          <div className="hashtag">tag</div>
                        </div>

                  </div>

                  <div className="card-button-list__paragraph">

                    <p>Description</p>

                  </div>

                  <div className="card-button-list__geoDate">

                    <div className="card-button-list__city card-button-list__everywhere " >
                      En todas partes
                    </div>

                    <div className="card-button-list__date">
                        Date
                    </div>

                  </div>

              </Link>

              </div>

          </div>

    </>

  );
}
