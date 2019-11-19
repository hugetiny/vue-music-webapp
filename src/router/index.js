import Vue from 'vue'
import Router from 'vue-router'
// import Singer from 'components/singer/singer'
// import Recommend from 'components/recommend/recommend'
// import Rank from 'components/rank/rank'
// import Search from 'components/search/search'
// import MusicList from 'components/music-list/music-list'
// import SingerDetail from 'components/singer-detail/singer-detail'
// import RankDetail from 'components/rank-detail/rank-detail'
// import User from 'components/user/user'

Vue.use(Router)

const Singer = (resolve) => {
  import('components/singer/singer').then((module) => {
    resolve(module)
  })
}

const Rank = (resolve) => {
  import('components/rank/rank').then((module) => {
    resolve(module)
  })
}

const Search = (resolve) => {
  import('components/search/search').then((module) => {
    resolve(module)
  })
}

const SingerDetail = (resolve) => {
  import('components/singer-detail/singer-detail').then((module) => {
    resolve(module)
  })
}

const MusicList = (resolve) => {
  import('components/music-list/music-list').then((module) => {
    resolve(module)
  })
}

const RankDetail = (resolve) => {
  import('components/rank-detail/rank-detail').then((module) => {
    resolve(module)
  })
}

const User = (resolve) => {
  import('components/user/user').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      // 默认跳转到 recommend
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: () => import('components/recommend/recommend'),
      children: [
        {
          path: ':id',
          component: MusicList
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: 'singer/:id',
          component: SingerDetail
        },
        {
          path: 'list/:id',
          component: MusicList
        }
      ]
    },
    {
      path: '/user',
      component: User
    }
  ]
})
