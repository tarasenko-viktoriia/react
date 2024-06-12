import React, { useState} from 'react';

const Spoiler = ({ header="+", open, children }) => {
    const [isOpen, setIsOpen] = useState(open);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
return (
  <div>
      <div onClick={toggleOpen} style={{ cursor: 'pointer' }}>
          {header}
      </div>
      {isOpen && (
          <div>
              {children}
          </div>
      )}
  </div>
);
};


const RangeInput = ({min, max}) => {
  const [text, setText] = useState("");

  const inputStyle = {
    border: (text.length < min || text.length > max) ? "2px solid red" : "1px solid black"};
  
  return (
    <div>
      <input type = "text" value = {text} onChange={e => setText(e.target.value)} style = {inputStyle} />
    </div>
  )
}

const LoginForm = ({onLogin}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = login !== "" && password !== "";

  return (
    <div>
      <input value={login} onChange={e=>setLogin(e.target.value)}/>
      <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
      <button disabled={!isFormValid} onClick={()=> onLogin({login, password})}>Login</button>
    </div>
  )
}

const PasswordConfirm = ({min}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputPasswordStyle = {
    border: (password.length < min || confirmPassword.length < min || password !== confirmPassword  ) ? "2px solid red" : "1px solid black"};

  return (
    <div>
      <input type='password' value={password} onChange={e=>setPassword(e.target.value)} style={inputPasswordStyle}/>
      <input type='password' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} style={inputPasswordStyle }/>
    </div>
  )
}


const Thumbnails = ({ images, current, onChange }) => (
  <div className="thumbnails">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`thumbnail-${index}`}
        className={`thumbnail ${current === index ? 'active' : ''}`}
        onClick={() => onChange(index)}
      />
    ))}
  </div>
);

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (direction) => {
    setCurrentIndex((currentIndex + direction + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="main-image" onClick={() => changeImage(1)}>
        <img src={images[currentIndex]} alt="carousel" />
      </div>
      <Thumbnails images={images} current={currentIndex} onChange={setCurrentIndex} />
    </div>
  );
};

const Content = ({page}) => 
  <div style={{fontSize: '5em'}}>
      Сторінка №{page}
  </div>

const Color = ({page}) =>
  <div style={{color: `rgb(${page*16},${page*16},${page*16})`}}>
      {page}
  </div>

const Pagination = ({ render, max }) => {
  const Render = render;
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
      if (page >= 1 && page <= max) {
          setCurrentPage(page);
      }
  };

  const goToPrevPage = () => {
      if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
      }
  };

  const goToNextPage = () => {
      if (currentPage < max) {
          setCurrentPage(currentPage + 1);
      }
  };

  return (
    <div>
        <button onClick={goToPrevPage}>{'<<'}</button>
        <button onClick={goToPrevPage}>{'<'}</button>
        {[...Array(max).keys()].map((page) => (
            <button key={page} onClick={() => goToPage(page + 1)}>
                {page + 1}
            </button>
        ))}
        <button onClick={goToNextPage}>{'>'}</button>
        <button onClick={goToNextPage}>{'>>'}</button>
        <Render page={currentPage} />
    </div>
  );
};

const App = () => (
    <div>
      <h2>Spoiler</h2>
      <Spoiler header={<h3>Заголовок</h3>} open> Контент 1
          <p> лорем іпсум тралівалі і тп.</p>
      </Spoiler>
      <Spoiler>
          <h4>Контент 2</h4>
          <p>лорем іпсум тралівалі і тп.</p>
      </Spoiler>
      <h2>RangeInput</h2>
      <RangeInput min={2} max={10} />
      <h2>LoginForm</h2>
      <LoginForm onLogin={obj=>console.log(obj)}/>
      <h2>PasswordConfirm</h2>
      <PasswordConfirm min={2} />
      <h2>Carousel</h2>
      <Carousel images={["https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"]} />
      <h2>Pagination</h2>
      <Pagination max={10} render={Content} />
      <Pagination max={16} render={Color} />
    </div>
);

export default App;
