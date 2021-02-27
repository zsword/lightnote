module github.com/leanote/leanote

go 1.16

require (
	github.com/PuerkitoBio/goquery v1.6.1
	github.com/andybalholm/cascadia v1.2.0 // indirect
	github.com/bradfitz/gomemcache v0.0.0-20190913173617-a41fca850d0b // indirect
	github.com/fsnotify/fsnotify v1.4.9 // indirect
	github.com/garyburd/redigo v1.6.2 // indirect
	github.com/go-stack/stack v1.8.0
	github.com/inconshreveable/log15 v0.0.0-20201112154412-8562bdadbbac
	github.com/klauspost/compress v1.11.8
	github.com/klauspost/cpuid v1.3.1
	github.com/mattn/go-colorable v0.1.8
	github.com/mattn/go-isatty v0.0.12
	github.com/patrickmn/go-cache v2.1.0+incompatible // indirect
	github.com/pkg/errors v0.9.1 // indirect
	github.com/revel/cmd v1.0.3
	github.com/revel/config v1.0.0
	github.com/revel/log15 v2.11.20+incompatible
	github.com/revel/modules v1.0.0 // indirect
	github.com/revel/pathtree v0.0.0-20140121041023-41257a1839e9
	github.com/revel/revel v1.0.0
	github.com/robfig/config v0.0.0-20141207224736-0f78529c8c7e
	github.com/twinj/uuid v1.0.0 // indirect
	github.com/xeonx/timeago v1.0.0-rc4
	golang.org/x/crypto v0.0.0-20210220033148-5ea612d1eb83
	golang.org/x/mod v0.4.1 // indirect
	golang.org/x/net v0.0.0-20210226172049-e18ecbb05110 // indirect
	golang.org/x/sys v0.0.0-20210227040730-b0d1d43c014d // indirect
	golang.org/x/tools v0.1.0 // indirect
	golang.org/x/xerrors v0.0.0-20200804184101-5ec99f83aff1 // indirect
	gopkg.in/fsnotify.v1 v1.4.7
	gopkg.in/mgo.v2 v2.0.0-20190816093944-a6b53ec6cb22
	gopkg.in/natefinch/lumberjack.v2 v2.0.0
	gopkg.in/stack.v0 v0.0.0-20141108040640-9b43fcefddd0 // indirect
)

replace github.com/leanote/leanote/app => ./app
