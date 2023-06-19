const header = () => {
  return `<header>
  <div class="wrapper">

      <img class="logo" src="../img/myntra-logo.png" alt="">

      <nav>
          <ul>
              <li><a href="../pages/men.html">MEN</a></li>
              <li><a href="../pages/women.html">WOMEN</a></li>
              <li><a href="../pages/kids.html">KIDS</a></li>
              <li><a href="../pages/home&living.html">HOME & LIVING</a></li>
              <li><a href="../pages/beauty.html">BEAUTY</a></li>
              <li><a href="../pages/studio.html">STUDIO</a><sup>NEW</sup></li>
          </ul>
      </nav>
      <div class="search-icons">
          <input type="text" placeholder="Search for products, brands and more">
          <div class="icon-div">
              <i class="fa-solid fa-user fa-flip"></i>
          <!-- <a href="" class="profile-a"> -->
              <ul class="ls-ul">
                  <li class="ls-li">
                      <a href="/pages/login.html" class="l-a">login</a>
                  </li>
                  <li class="ls-li">
                      <a href="/pages/signup.html" class="s-a">sign up</a>
                  </li>
              </ul>
          <!-- </a> -->
          </div>
          <a href=""><i class="fa-regular fa-heart fa-beat"></i></a>
          <a href=""><i class="fa-solid fa-bag-shopping fa-bounce"></i></a>
      </div>
  </div>
</header>`;
};

export default header;

