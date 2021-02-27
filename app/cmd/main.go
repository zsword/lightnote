package main

import (
	"fmt"

	"github.com/revel/cmd/harness"
	"github.com/revel/cmd/model"
	"github.com/revel/revel"
)

func main() {
	// go run main.go
	// 生成routes.go, main.go
	revel.Init("", "github.com/leanote/leanote", "")
	c := &model.CommandConfig{}
	paths := &model.RevelContainer{}
	fmt.Println(revel.BasePath)
	_, err := harness.Build(c, paths) // ok, err
	if err != nil {
		panic(err)
	}
	fmt.Println("Ok")
	//	panicOnError(reverr, "Failed to build")
}
