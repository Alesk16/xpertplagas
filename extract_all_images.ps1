$htmlPath = 'index.html'
$htmlContent = [System.IO.File]::ReadAllText($htmlPath)

$pattern = 'data:image/(png|jpeg|jpg);base64,([A-Za-z0-9+/=]+)'
$matches = [System.Text.RegularExpressions.Regex]::Matches($htmlContent, $pattern)

Write-Host "Found $($matches.Count) base64 blobs."

$counter = 200
foreach ($m in $matches) {
    $fullMatch = $m.Groups[0].Value
    $ext = $m.Groups[1].Value
    $base64 = $m.Groups[2].Value
    
    if ($ext -eq 'jpeg') { $ext = 'jpg' }
    
    $fileName = "extracted_image_$counter.$ext"
    $filePath = Join-Path 'imagenes' $fileName
    
    Write-Host "Extracting to $filePath ..."
    
    try {
        $bytes = [System.Convert]::FromBase64String($base64)
        [System.IO.File]::WriteAllBytes($filePath, $bytes)
        
        $newSrc = 'imagenes/' + $fileName
        $htmlContent = $htmlContent.Replace($fullMatch, $newSrc)
    } catch {
        Write-Host "Error decoding image $counter"
    }
    
    $counter++
}

[System.IO.File]::WriteAllText($htmlPath, $htmlContent)
Write-Host "Done! index.html updated."
