@echo off
title Build LightNote

cd %~dp0
cd ..
call revel build /m prod /a ./
cd %~dp0
pause