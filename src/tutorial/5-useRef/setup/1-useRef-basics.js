import React, { useEffect, useRef,useState } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  let kullaniciAdi = useRef()
  const [kullanici, setKullanici] = useState()

  function kullaniciAdiGoster() {
    setKullanici(kullaniciAdi.current.value)
  }

  return (
    <>
      <p>Kullanıcı Adı: {kullanici}</p>
      <input type="text" ref={kullaniciAdi} />
      <button onClick={kullaniciAdiGoster}>Kullanıcı Adını Göster</button>
    </>
  );
};

export default UseRefBasics;
