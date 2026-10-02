$content = [System.IO.File]::ReadAllText('index.html')
$matches = [System.Text.RegularExpressions.Regex]::Matches($content, 'data:[a-zA-Z0-9/+-]+;base64,[A-Za-z0-9+/=]+')
Write-Host "Found $($matches.Count) base64 blobs remaining."
foreach ($m in $matches) {
    $val = $m.Groups[0].Value
    Write-Host "Length of match: $($val.Length)"
    Write-Host "Start of match: $($val.Substring(0, 50))"
}
