import { useState } from 'react';
import { productData } from './productData';
import './App.css';

function App() {
  const [product, setProduct] = useState(productData);
  const previewImage = product.properties.find(prp => prp.type === 'image').variants[0];
  const [selectedPreview, setSelectedPreview] = useState(previewImage);
  const [selectedVariants, setSelectedVariants] = useState({});

  // TODO: handleVariantChange fonksiyonunu tamamlayın.
  const handleVariantChange = (propertyLabel, variantValue) => {
    // Seçilen varyantları güncelleyin.
    // Örnek: setSelectedVariants(prev => ({ ...prev, [propertyLabel]: variantValue }));
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
          <img /* TODO: Seçilen görseli gösterin */ alt={`${product.title} - ${selectedPreview.label}`} />
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
                      {/* TODO: Radyo butonları için varyantları listeyin ve seçim yapılmasını sağlayın */}
                      <div className='other-variants'>
                        {prp.variants.map((v, ind) => (
                          <div key={ind} className='variant-oth'>
                            <label htmlFor={v.label}>
                              <input
                                type="radio"
                                name={prp.label}
                                id={v.label}
                                /*checked= TODO: Radyo butonları için varyantları listeyin ve seçim yapılmasını sağlayın */
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
                          name={prp.label}>
                          {prp.variants.map((v, ind) => (
                            /* TODO: Dropdown için varyantları listeyin ve seçim yapılmasını sağlayın */
                            <option></option>
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
                          <div key={ind} className={`variant-img ${(v.imageUrl === selectedPreview.imageUrl) && "selected"}`}>
                            <img
                              /* onClick={() => {
                                
                                 setSelectedPreview(........);
                                 handleVariantChange(prp.label, v.value);
                               }}
                               TODO: Görsel varyantları listeyin ve seçim yapılmasını sağlayın 
                               src={...}*/
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
