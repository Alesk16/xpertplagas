$content = [System.IO.File]::ReadAllText('index.html')
$matches = [System.Text.RegularExpressions.Regex]::Matches($content, '(?s)<style.*?>(.*?)</style>')
$css = ''
foreach ($m in $matches) {
    $css += $m.Groups[1].Value + "`n`n"
}
New-Item -ItemType Directory -Force -Path 'css'
[System.IO.File]::WriteAllText('css/styles.css', $css)
$newContent = [System.Text.RegularExpressions.Regex]::Replace($content, '(?s)<style.*?>.*?</style>', '')
$newContent = $newContent -replace '</head>', "<link rel=`"stylesheet`" href=`"css/styles.css`">`n</head>"
[System.IO.File]::WriteAllText('index.html', $newContent)
