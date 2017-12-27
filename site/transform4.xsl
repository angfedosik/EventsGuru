<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <h1>Events</h1>
                <h2>Всего мероприятий:
                    <xsl:value-of select="count(//event)"/></h2>
                <xsl:apply-templates select = "//event"/>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="events">
        <div><xsl:value-of select="@name"/></div>
    </xsl:template>
    <xsl:template match="event" mode="local">
       <tr><td>Мероприятие</td><td> <xsl:value-of select="@name"/></td>
        </tr>
        <tr><td>Место</td> <td><xsl:value-of select="@place"/></td>
        </tr>
        <tr><td>Время</td><td><xsl:value-of select="@date"/></td>
        </tr>
    </xsl:template>
     <table border="1">
    <xsl:template match="event">
           
                <xsl:apply-templates select="//event[@name=current()/@name]" mode="local"/>
                <p/>

    </xsl:template>
            </table>
    
</xsl:stylesheet>