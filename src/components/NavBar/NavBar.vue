<script setup lang="ts"></script>

<template>
  <header>
    <!-- 顶部搜索内容 -->
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-3">
            <div class="header-phone">
              <i class="fa fa-phone-square"></i>
              <span>183666666</span>
            </div>
          </div>
          <div class="col-sm-6 col-9">
            <div class="link">
              <ul class="share">
                <li>
                  <a href="javascript:;">
                    <!-- <i class="fa fa-phone-square"></i> -->
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <!-- <i class="fa fa-phone-square"></i> -->
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <!-- <i class="fa fa-phone-square"></i> -->
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <!-- <i class="fa fa-phone-square"></i> -->
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
              <!-- 搜索显示 -->
              <div class="search">
                <input type="text" class="header-search" />
                <i class="fa fa-search"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 品牌内容以及导航 -->
    <nav class="navbar navbar-expand-md bg-dark">
      <div class="container nav-flex">
        <a class="navbar-brand" href="#">BootStrap</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse navbar-right"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav bg-dark">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu bg-dark">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.top-bar {
  padding: 10px 0;
  background: #191919;
  border-bottom: 1px solid #222;
  line-height: 28px;
  color: white;

  .link {
    text-align: right;
    .share {
      display: inline-block;
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        display: inline-block;
        padding-right: 3px;
        a {
          display: inline-block;
          color: #fff;
          background-color: #404040;
          width: 25px;
          height: 25px;
          line-height: 25px;
          text-align: center;
          border-radius: 5px;
        }
      }
    }
    //搜索内容
    .search {
      display: inline-block;
      .header-search {
        display: inline-block;
        background: transparent;
        border: none;
        width: 60px;
        color: #fff;
        padding: 0 10px;
        transition: all 500ms;
      }
      i {
        padding-left: 5px;
      }
      .header-search:hover {
        width: 150px;
        padding: 0 10px;
      }
    }
  }
}
.navbar {
  .navbar-brand {
    font-size: 28px;
    padding: 10px 0;
  }
  a {
    color: white;
  }
}
// nav.navbar
</style>
