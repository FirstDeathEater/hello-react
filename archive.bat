robocopy "C:\\savvi\\websites\\hello-react" "C:\\SavviArchive\\websites\\hello_react_%date:~10,4%-%date:~4,2%-%date:~7,2%_%BUILD_NUMBER%" /mir /fp /v
@echo robocopy exit code: %ERRORLEVEL%
@if %ERRORLEVEL% GTR 3 ( echo robocopy ERROR )
@if %ERRORLEVEL% GTR 3 ( exit %ERRORLEVEL% )
@set ERRORLEVEL=0
REM at the end:
exit /b 0