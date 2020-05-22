import React from 'react';

function SectionCard({title, text, read_more, image_name, url, sTop}) {
  return (
    <>
      <div className={sTop ? 'w-100 section_container s-top' : 'w-100 section_container'}>
        <div className=" w-90 section_card_holder">
          <div className="flex-row-center w-80 section_card">
              <div className="card_header w-70">
                  <h1>{title}</h1>
                  <p>{text}</p>
                  {
                    read_more ? 
                    <a href={url || '//#endregion'}>Read more</a>
                    :
                    ''
                  }
              </div>
              <div className="card_image_holder">
                <img src={require(`../../assets/images/${image_name}.svg`)} alt="card" width="100%" height="auto"/>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionCard