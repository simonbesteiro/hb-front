///popup general component for all overlayed sections like PopupExtraFilters
//Form component with the main fields for signup in the platform
//imported from libraries
import PopupHeader from 'components/popup/PopupHeader';


export default function Popup({children, title}) {

  return (

          <div className="popup">

              <PopupHeader linkBack="/" linkFwd="/">{title}</PopupHeader>


              <div className="popup__content">

                    {children}

              </div>

          </div>
  );

}