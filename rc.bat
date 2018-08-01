robocopy %1 %2 /mir /fp /v
@echo robocopy exit code: %ERRORLEVEL%
@if %ERRORLEVEL% GTR 3 ( echo robocopy ERROR )
@if %ERRORLEVEL% GTR 3 ( exit %ERRORLEVEL% )
@set ERRORLEVEL=0
REM at the end:
exit /b 0