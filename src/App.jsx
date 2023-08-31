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

  };

  // DONE: calculatePrice fonksiyonunu tamamlayın.
  const calculatePrice = () => {
    let total = productData.basePrice;
    // Seçilen varyantlara göre toplam fiyatı hesaplayın.

    // selectedVariants, seçilen varyantların bilgilerini tutuyor 
    // label: value şeklinde tutuluyor
    for (const key in selectedVariants) {
      // variant, seçilen varyantın bilgilerini getirir
      // bütün product datası içinde dolaşarak 
      // seçilen her bir özellik için,
      // selector başlığına denk gelen labelını bulur
      const variant = productData.properties

        // seçilen özelliğin labelına bakarak bulur
        .find((p) => p.label === key)
        // o özellik içindeki seçeneklerde de
        // seçilen seçeneğin value değerine bakarak 
        // seçilen seçeneğin tüm bilgilerini bulur
        .variants.find(v => v.value === selectedVariants[key])

      // buradan da amacımız seçilen seçeneğin fiyat bilgisini almak
      // eğer variant.priceModifier bir fonksiyon ise fonksiyonu çalıştır
      if (typeof variant.priceModifier === "function") {
        total += variant.priceModifier(total)
        // değilse direk topla
      } else {
        total += variant.priceModifier
      }

      console.log("variant", variant)
    }
    // toplam fiyatı 2 ondalıkla return et
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

          <div className='priceTotal'>${/* DONE: Toplam fiyatı gösterin */}
            {calculatePrice()}</div>
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
                      {/* DONE: Renk varyantları için seçim yapılmasını sağlayın */}
                      <div className='other-variants'>
                        {prp.variants.map((v, ind) => (
                          <label key={v.value} className='custom-radio-container'>
                            <input
                              type="radio"
                              name={prp.type}
                              value={v.value}
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
