<template>
    <div>
    <nav class="nav">
      <div class="container">
        <div class="nav__wrapper">
          <div class="location-state">
            <img src="/assets/images/location-icon.png" width="12" height="14" alt="">
            <div class="location-state__title">Волгоградская область</div>
          </div>
          <ul class="nav__list">
            <li class="nav__item">
              <a class="nav__link" href="">Тендеры</a>
            </li>
            <li class="nav__item"> 
              <a class="nav__link" href="">База подрядчиков</a>
            </li>
            <li class="nav__item">
              <button class="nav__link btn" href="">Другие сервисы
                  <img src="/assets/images/arrow.png" alt="">
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <div class="search__wrapper">
        <div class="container">
          <section class="search">
            <a href="#" class="logo-link">
              <img class="search__logo" src="@/assets/images/logo.jpg" alt="Логотип сайта" width="221" height="48">
            </a>
            <a href="#" class="search__catalog">
              <i class="fas fa-bars"></i>
              Каталог
            </a>
              <form class="search__form">
                <div class="modal" @click="modal = false"></div>

                <input type="text" 
                class="search__input" 
                placeholder="Хочу найти..."
                @input="filterItem"
                @focus="modal = true"
                v-model="item"   
                autocomplete="off"                    
                >
                <div class="width-autocomplete">
                <div v-if="filterItems && modal">
                    <ul class="list">
                      <li 
                        class="list__item"
                        v-for="filterItem in filterItems" 
                        :key="filterItem.id"
                        @click="setItem(filterItem)"
                      >
                      {{filterItem}}
                      </li>
                    </ul>
                  </div>
                </div>

                <button type="submit" class="search__btn">
                    <img src="@/assets/images/search-icon.svg" alt="Кнопка поиска">
                </button>
              </form>
              <button class="search__list">
                  <img src="@/assets/images/search-list.png" alt="Список">
                  Список
              </button>
              <div class="search__account">A</div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: '',
      items: ['Пила', 'Ножовка', 'Дрель'],
      filterItems: [],
      modal: false
    }
  },
  mounted() {
    this.filterItem()
  },  
  methods: {
    filterItem() {
      if (this.items.length == 0) {
        this.filterItem = this.items
      }
      this.filterItems = this.items.filter(item => {
        return item.toLowerCase().startsWith(this.item.toLowerCase())
      })
    },
    setItem(item) {
      this.item = item
      this.modal = false
    }
  }
}
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    font-family: "Open Sans";
    box-sizing: border-box;
    }

.container {
    max-width: 1110px;
    margin: 0 auto;
}

// Nav
.nav {
    display: flex;
    background-color: #FAFBFC;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #708598;
    border-bottom: 1px solid #ECEFF1;

    &__wrapper {
        display: flex;
        justify-content: space-between;
        width: 1110px;
        padding-top: 6px;
        padding-bottom: 6px;
        height: 100%;
    }

    &__list {
        list-style: none;
        display: flex;
    }

    &__item {
        margin-right: 24px;

        &:last-child {
            margin-right: 0;
        }
    }

    &__link {
        text-decoration: none;
        color: #708598;
    }

    .last-link {
        margin-right: 6.5px;
    }

    .btn {
        border: none;
        background-color: transparent;
        cursor: pointer;
        
        img {
            margin-left: 6.5px;
        }
    }
}

.location-state {
    display: flex;
    align-items: center;
    cursor: pointer;

    &__title {
        margin-left: 8px;
    }
}

// Search
.search {
    display: flex;
    align-items: center;
    padding: 14px 0;

    &__wrapper {
        border-bottom: 1px solid #ECEFF1;
    }

    &__logo {
        margin-right: 24px;
        cursor: pointer;
    }

    &__catalog {
        display: flex;
        align-items: center;
        margin-right: 24px;
        padding: 10px 16px;
        background-color: #FED83D;
        text-decoration: none;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        color: #050F19;
        height: 40px;

        i {
            margin-right: 8px;
        }
    }

    &__input {
        border: 1px solid #ECEFF1;
        border-radius: 4px;
        height: 40px;
        padding: 8px 424px 8px 14px;
        max-width: 526px;
        width: 100%;
        margin-right: 24px;
        z-index: 1;
        position: relative;

        &::placeholder {
            color: #708598;
        }
    }

    &__btn {
        position: absolute;
        right: 25px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 10px;
        padding-left: 15px;
    }

    &__list {
        display: flex;
        align-items: center;
        margin-right: 24px;
        padding: 10px 16px;
        background-color: #FAFBFC;
        text-decoration: none;
        border-radius: 4px;
        border: 1px solid #ECEFF1;
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        color: #050F19;
        height: 40px;
        cursor: pointer;

        img {
            margin-right: 12px;
        }
    }

    &__account {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #9B51E0;
        color: #fff;
        cursor: pointer;
    }
}

.list {
  background-color: #ccc;
  list-style: none;
  width: au;

  &__item {
    padding: 2px;
    padding-left: 5px;
    color: white;
    cursor: pointer;
  }
}

.modal {
  position: absolute;
  z-index: 0;
  inset: 0;
}

.width-autocomplete {
  position: absolute;
  width: 523px;

}

</style>