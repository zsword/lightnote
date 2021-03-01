@echo off
title Make Dev

cd %~dp0
%~d0
cd ..
set NOTE_BASE=D:\Learn-Docs\lightnote
mklink /D files %NOTE_BASE%\files\
mklink /D public\upload %NOTE_BASE%\public\upload
pause