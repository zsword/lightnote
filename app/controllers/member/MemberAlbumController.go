package member

import (
	"strings"

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
	c.ViewArgs["globalConfigs"] = configService.GetGlobalConfigForUser()
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

func (c MemberAlbum) MoveAlbumImages(albumId string, fileIds []string) revel.Result {
	albumId = strings.TrimSpace(albumId)
	for _, v := range fileIds {
		fileService.UpdateImageAlbum(c.GetUserId(), v, albumId)
	}
	return c.RenderJSON(len(fileIds))
}

func (c MemberAlbum) DeleteImages(fileIds []string) revel.Result {
	re := info.NewRe()
	num := 0
	for _, v := range fileIds {
		suc, msg := fileService.DeleteImage(c.GetUserId(), v)
		if suc {
			num++
			re.Ok = true
		} else {
			re.Msg = msg
		}
	}
	re.Item = num
	return c.RenderJSON(re)
}
