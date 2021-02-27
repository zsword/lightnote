package member

import (
	"github.com/revel/revel"
	//	"encoding/json"
	"github.com/leanote/leanote/app/info"
	"gopkg.in/mgo.v2/bson"
	//	. "github.com/leanote/leanote/app/lea"
	//	"io/ioutil"
)

// MemberAlbum controller
type MemberAlbum struct {
	MemberBaseController
}

// 图片管理, iframe
func (c MemberAlbum) Index() revel.Result {
	c.SetLocale()
	return c.RenderTemplate("member/album/index.html")
}

// all MemberAlbums by userId
func (c MemberAlbum) GetMemberAlbums() revel.Result {
	re := albumService.GetAlbums(c.GetUserId())
	return c.RenderJSON(re)
}
func (c MemberAlbum) DeleteMemberAlbum(albumId string) revel.Result {
	re, msg := albumService.DeleteAlbum(c.GetUserId(), albumId)
	return c.RenderJSON(info.Re{Ok: re, Msg: msg})
}

// add MemberAlbum
func (c MemberAlbum) AddMemberAlbum(name string) revel.Result {
	album := info.Album{
		AlbumId: bson.NewObjectId(),
		Name:    name,
		Seq:     -1,
		UserId:  c.GetObjectUserId()}
	re := albumService.AddAlbum(album)

	if re {
		return c.RenderJSON(album)
	} else {
		return c.RenderJSON(false)
	}
}

// update alnum name
func (c MemberAlbum) UpdateMemberAlbum(albumId, name string) revel.Result {
	return c.RenderJSON(albumService.UpdateAlbum(albumId, c.GetUserId(), name))
}
