import { useState } from 'react';
import { productData } from './productData';
import './App.css';

function App() {
  const [product, setProduct] = useState(productData);
  const previewImageDefault = product.properties.find(prp => prp.type === 'image').variants[0];
  const [selectedPreview, setSelectedPreview] = useState(previewImageDefault);
  const [selectedVariants, setSelectedVariants] = useState({});

  // DONE: handleVariantChange fonksiyonunu tamamlayın.
  const handleVariantChange = (propertyLabel, variantValue) => {
    // Seçilen varyantları güncelleyin.
    // Örnek: setSelectedVariants(prev => ({ ...prev, [propertyLabel]: variantValue }));
    setSelectedVariants({ ...selectedVariants, [propertyLabel]: variantValue })
    /*  t0: const [state, setStage] = useState(0)
     t0 state => 0
     t1 setState(7)
     t1 state => 7 
     t2 setState(biFn(10))
     t2 state => 12
 
     stateHistory = {
       t0: 0,
       t1: 7,
       t2: 12
     }
 
     setState((p)=>p+1)
     setState (t2)=>t2+1)
 
     t3: 13
 
     stateHistory = {
       t0: 0,
       t1: 7,
       t2: 12,
       t3: 13
     }
     
     // birArray.map((data, ind)=>data.ssdsfasdf)
  */
  };

  // TODO: calculatePrice fonksiyonunu tamamlayın.
  const calculatePrice = () => {
    let total = productData.basePrice;
    // Seçilen varyantlara göre toplam fiyatı hesaplayın.
    return total.toFixed(2);
  };

  return (
    <div className='app-container'>
      <div className='app--panel'>

        <div className='image-container'>
          <img
            src={selectedPreview.imageUrl}
            /* DONE: Seçilen görseli gösterin */
            alt={`${product.title} - ${selectedPreview.label}`} />
        </div>
      </div>
      <div className='app--panel'>
        <div className='details-container'>
          <h2>{product.title}</h2>

          <div className='priceTotal'>${/* TODO: Toplam fiyatı gösterin */}</div>
          <div>
            {
              product.properties.map((prp, ind) => (
                <div key={ind}>
                  {prp.type === 'radio' &&
                    <>
                      <h3>{prp.label}</h3>
                      {/* DONE: Radyo butonları için varyantları listeyin ve seçim yapılmasını sağlayın */}
                      <div className='other-variants'>
                        {prp.variants.map((v, ind) => (
                          <div key={ind} className='variant-oth'>
                            <label htmlFor={v.label}>
                              <input
                                type="radio"
                                name={prp.label}
                                id={v.label}
                                /*checked= DONE: Radyo butonları için varyantları listeyin ve seçim yapılmasını sağlayın */
                                checked={selectedVariants[prp.label] === v.value}
                                onChange={() => handleVariantChange(prp.label, v.value)}
                                value={v.value} />
                              {v.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </>
                  }
                  {prp.type === 'dropdown' &&
                    <>
                      <h3>{prp.label}</h3>

                      <label>
                        <select className='variant-drp'
                          onChange={e => handleVariantChange(prp.label, e.target.value)}
                          name={prp.label}
                          value={selectedVariants[prp.label] || ""}>

                          {prp.variants.map((v, ind) => (
                            /* DONE: Dropdown için varyantları listeyin ve seçim yapılmasını sağlayın */
                            <option key={ind} value={v.value}>{v.label}</option>
                          ))}
                        </select>
                      </label>
                    </>
                  }
                  {prp.type === 'image' &&
                    <div>
                      <h3>{prp.label}</h3>

                      <div className='image-variants'>
                        {prp.variants.map((v, ind) => (
                          <div key={ind} className={`variant-img ${selectedVariants[prp.label] === v.value && "selected"}`}>
                            <img
                              onClick={() => {
                                setSelectedPreview(v);
                                handleVariantChange(prp.label, v.value);
                              }}
                              /*  DONE: Görsel varyantları listeyin ve seçim yapılmasını sağlayın 
                              */
                              src={v.buttonImage}
                              alt={`${v.label} resmindeki örneği görüntüle`
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                  {prp.type === 'color' &&
                    <>
                      <h3>{prp.label}</h3>
                      {/* TODO: Renk varyantları için seçim yapılmasını sağlayın */}
                      <div className='other-variants'>
                        {prp.variants.map((v, ind) => (
                          <label key={v.value} className='custom-radio-container'>
                            <input
                              type="radio"
                              name={prp.type}
                              value={v.value}
                              /* checked={} 
                                 onChange={} */
                              checked={selectedVariants[prp.label] === v.value}
                              onChange={() => handleVariantChange(prp.label, v.value)}
                            />
                            <span className="checkmark" style={{ display: 'inline-block', backgroundColor: v.value }}></span>
                          </label>
                        ))}
                      </div>

                    </>
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default App;
